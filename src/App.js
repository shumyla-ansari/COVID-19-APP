import React, {useState, useEffect} from 'react'
import SearchAppBar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import styles from './App.module.css'
import BarChart from './components/Charts/BarChart'

function App() {

  const barChartData1 = {
    "confirmed": {
        "value": 46118051,
        "detail": "https://covid19.mathdro.id/api/confirmed"
    },
    "recovered": {
        "value": 30864613,
        "detail": "https://covid19.mathdro.id/api/recovered"
    },
    "deaths": {
        "value": 1196020,
        "detail": "https://covid19.mathdro.id/api/deaths"
    },
    "dailySummary": "https://covid19.mathdro.id/api/daily",
    "dailyTimeSeries": {
        "pattern": "https://covid19.mathdro.id/api/daily/[dateString]",
        "example": "https://covid19.mathdro.id/api/daily/2-14-2020"
    },
    "image": "https://covid19.mathdro.id/api/og",
    "source": "https://github.com/mathdroid/covid19",
    "countries": "https://covid19.mathdro.id/api/countries",
    "countryDetail": {
        "pattern": "https://covid19.mathdro.id/api/countries/[country]",
        "example": "https://covid19.mathdro.id/api/countries/USA"
    },
    "lastUpdate": "2020-11-01T09:24:45.000Z"
}

  const [barState, setBarState] = useState({
    data: {},
    country: "Global",
  })
     
  const [countryState, setCountryState] = useState({
    data: {},
    country: "Global",
  })

   const [ daily, setDaily ] = useState([]);


useEffect(() => {
  const fetchCountryData = async () => {
  const response = await fetch("https://covid19.mathdro.id/api")
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
        ? "https://covid19.mathdro.id/api"
        : `https://covid19.mathdro.id/api/countries/${countryCode}`;
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
        const dailyData  = await fetch("https://covid19.mathdro.id/api/daily");
        const newDailyData = await dailyData.json();
        const modifiedNewDailyData = 
        newDailyData.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
          }));

        setDaily(modifiedNewDailyData);
        
       }

       fetchData();
   }, [])
 

  return (
    <div className={styles.container}>
      
    <SearchAppBar  
    handleCountryChange ={handleCountryChange}
    countryState={countryState.country}
    />
  
    <Cards 
    countryState = {countryState.data}
          />
          <BarChart barState = {barState.data} barCountry = {barState.country} />
    <Charts daily = {daily} />
    
    </div>
  );
}
//data= {barState.data} country= {barState.country}
// barCountry={barState.country}  barState= {barState.data}
export default App;


{/* <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/237/microbe_1f9a0.png" alt="corona" width="100px"></img> */}
    {/* <img src="https://media.giphy.com/media/dVuyBgq2z5gVBkFtDc/giphy.gif" alt="corona-gif" width="200px"></img> */}