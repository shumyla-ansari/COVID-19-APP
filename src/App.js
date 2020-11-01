import React, {useState, useEffect} from 'react'
import SearchAppBar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import styles from './App.module.css'

function App() {

  const [countryState, setCountryState] = useState({
    data: {},
    country: "Global",
  })
 //const [selectedCountry, setSelectedCountry] = useState("");
   const [ daily, setDaily ] = useState([]);


useEffect(() => {
  const fetchCountryData = async () => {
  const response = await fetch("https://covid19.mathdro.id/api")
    const data = await response.json()
      setCountryState({
        data: data
      });
    }
    fetchCountryData()
}, []);


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

  
 };

//  const handleSubmit = event => {
//   if (countryState) 
//   event.preventDefault();
// };

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
    //handleSubmit={handleSubmit}
    countryState={countryState.country}
    />
    
    <Cards 
    countryState = {countryState.data}
          />
    <Charts daily = {daily} barCountry={countryState.country}  barData = {countryState.data}/>
    </div>
  );
}

export default App;


{/* <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/237/microbe_1f9a0.png" alt="corona" width="100px"></img> */}
    {/* <img src="https://media.giphy.com/media/dVuyBgq2z5gVBkFtDc/giphy.gif" alt="corona-gif" width="200px"></img> */}