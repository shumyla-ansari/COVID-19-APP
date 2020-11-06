import React,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
import Marker from './Marker'
import InfoWindow from './InfoWindow'
import numeral from "numeral";
import { v4 as uuidv4 } from "uuid";



const Map = ({countries, location, zoom, center, info}) =>{ 

    const [infoWindowState, setInfoWindowState] = useState(false);

console.log(info)
    //   function onMarkerClick(e, props){
    //     console.log("I am clicked")}
    //      setInfoWindowState({
    //     // // //   selectedPlace: props,
    //     //   activeMarker: marker,
    //       showingInfoWindow: true
    //      });
 
//   const onMapClicked = (props) => {
//       setInfoWindowState({
//         showingInfoWindow: false,
//         activeMarker: null
//       })
//     }

return(
    <div className="map">
      <h2 className="map-h2">Global Corona Cases</h2>
  
      <div className="google-map">
   {countries ? 
   <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY }}
          center={{lat:center[0], lng:center[1]}}
          zoom={15}
          onClick={(e) => setInfoWindowState(true)}
          
          //yesIWantToUseGoogleMapApiInternals
          //onMapClicked={onMapClicked}
        > 

{/* 
          {countries && <Marker
         onClick={onMarkerClick}
          lat={center[0]}
          lng={center[1]}
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'} 
        //   icon={{
        //     url: "/path/to/custom_icon.png",
        //     anchor: new google.maps.Point(32,32),
        //     scaledSize: new google.maps.Size(64,64)
        //   }}
        ///>
          //  } */}

{countries.map(position => (
        <Marker
        key={uuidv4()}
          onClickPin={(e) => setInfoWindowState(true)}
          //onClickPin ={(e) => clickIcon(e)}
          lat={position.countryInfo.lat}
          lng={position.countryInfo.long}
          title={position.country}
          //name={position.country}
        //   icon={{
        //     url: "/path/to/custom_icon.png",
        //     anchor: new google.maps.Point(32,32),
        //     scaledSize: new google.maps.Size(64,64)
        //   }}
    
       />
))}
{  infoWindowState && info ? ( <InfoWindow  
        flag = {info.countryInfo.flag}
        name = {info.country}
        cases = {numeral(info.cases).format("0,0")}
        infected = {numeral(info.recovered).format("0,0")}
        deaths = {numeral(info.deaths).format("0,0")}
      
          />) : null }
 
     </GoogleMapReact> : null}
      </div>
      </div>
)
    }

export default Map