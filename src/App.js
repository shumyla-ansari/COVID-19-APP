import React, {useState, useEffect} from 'react'
import SearchAppBar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import styles from './App.module.css'

function App() {

  const [countryState, setCountryState] = useState({})
 const [selectedCountry, setSelectedCountry] = useState("");
   const [ daily, setDaily ] = useState([]);


useEffect(() => {
  const fetchCountryData = async () => {
  const response = await fetch("https://covid19.mathdro.id/api")
    const data = await response.json()
      setCountryState(data);
    }
    fetchCountryData()
}, []);


const handleCountryChange =  async (e) => {
  const countryCode = e.target.value;
  console.log(countryCode)
 setSelectedCountry(countryCode);
 
  const url =
      countryCode === "Global"
        ? "https://covid19.mathdro.id/api"
        : `https://covid19.mathdro.id/api/countries/${countryCode}`;
    const response = await fetch(url)
    const data = await response.json()
  
 
  setCountryState(data)
 };

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
    selectedCountry ={selectedCountry}
    />
    
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