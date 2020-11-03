import React, {useState, useEffect} from 'react'
import SearchAppBar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import styles from './App.module.css'
import BarChart from './components/Charts/BarChart'
import Map from './GoogleMaps'

function App() {

  const location = {
    address: 'NHS LONDON',
    lat: parseFloat(33), 
    lng: parseFloat(65),
  }  

  const [barState, setBarState] = useState({
    data: {},
    country: "Global",
  })
     
  const [countryState, setCountryState] = useState({
    data: {},
    country: "Global",
  })

  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796] );
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [ daily, setDaily ] = useState([]);


useEffect(() => {
  const fetchCountryData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all")
    const data = await response.json()
     setBarState({
       data: data})

      setCountryState({
        data: data
        
      });
    }
 
    fetchCountryData()
}, []);

console.log(barState)

useEffect(() => {
  const getCountriesData = async () => {
   const response = await fetch("https://disease.sh/v3/covid-19/countries")
    const data  = await response.json()
        setMapCountries(data);      
  };

  getCountriesData();
}, []);

console.log(mapCountries);

console.log(countryState)
const handleCountryChange = async (e) => {
  const countryCode = e.target.value;

  const url =
      countryCode === "Global"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    const response = await fetch(url)
    const data = await response.json()

    console.log(countryCode)
 
  setCountryState({
   data: data, country: countryCode
  })
  setBarState({
    data: data, country: countryCode
   })
  
  setMapCenter(countryCode && countryCode ==="Global" ?
  {lat: 34.80746, lng: -40.4796} 
  : [data.countryInfo.lat, data.countryInfo.long]
   );
   setMapZoom(countryCode && countryCode === "Global" ? 2.5 : 8)
 };

 console.log(mapCenter)
console.log(countryState)
  useEffect(() => {
    const fetchData = async() => {
        const dailyData  = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");
        const newDailyData = await dailyData.json();
        console.log(newDailyData)
        setDaily(newDailyData);
        
       }

       fetchData();
   }, [])

  return (
    <div className={styles.container}>
      
    <SearchAppBar  
    handleCountryChange ={handleCountryChange}
    countryState={countryState.country}
    />
  
    <Cards countryState = {countryState.data}/>
    <Map countries={mapCountries} location={location }center={mapCenter}
          zoom={mapZoom} />
    <BarChart barState = {barState.data} barCountry = {barState.country} />
    <Charts daily = {daily} />
    
  {/* countries={mapCountries}
          //casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
          location={location} */}
    
    </div>
  );
}

export default App;

