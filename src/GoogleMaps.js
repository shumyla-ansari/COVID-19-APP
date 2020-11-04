import React,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
import Marker from './Marker'
import InfoWindow from './InfoWindow'
import numeral from "numeral";
import { v4 as uuidv4 } from "uuid";

const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 2000,
    },
  };
//{ countries, casesType, center, zoom, location }

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
          zoom={zoom}
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
{  infoWindowState && countries ? ( <InfoWindow  
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