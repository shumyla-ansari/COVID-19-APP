import React, {useState, useEffect} from 'react'
import SearchAppBar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import styles from './App.module.css'

function App() {

  const [countryState, setCountryState] = useState(0);
  //const [update, setUpdate] = useState({});
  const [fetchedCountries, setfetchedCountries] = useState([]);
  const [ daily, setDaily ] = useState([]);
  
  useEffect(() => {
     const getData = async() => {


        const data = await fetch("https://covid19.mathdro.id/api/");
       const results = await data.json();

       // const timeUpdate = await fetch("https://covid19.mathdro.id/api/");
        //const responseTimeUpdate = await timeUpdate.json();
        // const modifiedData = {
        //   infected: results.confirmed,
        //   recovered: results.recovered,
        //   deaths: results.deaths,
        // };
        // const modifiedTime = {
        //   lastUpdate: responseTimeUpdate.lastUpdate,
      
       setCountryState(results);
      // setUpdate(modifiedTime);
    
     }
     getData();
   
   }, []);
  
 console.log(countryState)
// console.log(update)
  // const url = "https://covid19.mathdro.id/api/"
        // let changeableUrl = url ;
    
        // if(country) {
        //   changeableUrl = `${url}/countries/${country}`
        // }

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

useEffect(() => {
  const countries = async() =>{
  const response = await fetch("https://covid19.mathdro.id/api/countries")
  const countryResponse = await response.json();
  const newCountry = countryResponse.countries.map(key => {
    return(
key.name
)})
  setfetchedCountries(newCountry)
  }
  countries();
}, [setfetchedCountries])

  // const handleCountryChange = async (country) => {
  //   const getData = await getData();
  // }

  return (
    <div className={styles.container}>
      
    <SearchAppBar  fetchedCountries={fetchedCountries} />
    
    <Cards 
    countryState = {countryState}
          />
    <Charts daily = {daily} />
    </div>
  );
}

export default App;


{/* <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/237/microbe_1f9a0.png" alt="corona" width="100px"></img> */}
    {/* <img src="https://media.giphy.com/media/dVuyBgq2z5gVBkFtDc/giphy.gif" alt="corona-gif" width="200px"></img> */}