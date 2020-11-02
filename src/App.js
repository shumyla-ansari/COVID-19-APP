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
    lat: 34.80746, 
    lng: -40.4796,
  }  

  const [barState, setBarState] = useState({
    data: {},
    country: "Global",
  })
     
  const [countryState, setCountryState] = useState({
    data: {},
    country: "Global",
  })

  // const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  // const [mapZoom, setMapZoom] = useState(3);

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

  
 };
console.log(barState)
  useEffect(() => {
    const fetchData = async() => {
        const dailyData  = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");
        const newDailyData = await dailyData.json();
        console.log(newDailyData)
      //  const modifiedNewDailyData =
      //    newDailyData &&  Object.entries(newDailyData).map(({ cases, recovered, deaths }) =>{
      //      return (
      //        {cases: newDailyData["cases"], 
      //      recovered: newDailyData["recovered"], 
      //      deaths: newDailyData["deaths"]}
      //      )})

        setDaily(newDailyData);
        
       }

       fetchData();
   }, [])
 
console.log(daily)
  return (
    <div className={styles.container}>
      
    <SearchAppBar  
    handleCountryChange ={handleCountryChange}
    countryState={countryState.country}
    />
  
    <Cards countryState = {countryState.data}/>
    <BarChart barState = {barState.data} barCountry = {barState.country} />
    <Charts daily = {daily} />
    <Map location = {location} zoomLevel={1}/>
    
  
    
    </div>
  );
}

export default App;


{/* <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/237/microbe_1f9a0.png" alt="corona" width="100px"></img> */}
    {/* <img src="https://media.giphy.com/media/dVuyBgq2z5gVBkFtDc/giphy.gif" alt="corona-gif" width="200px"></img> */}