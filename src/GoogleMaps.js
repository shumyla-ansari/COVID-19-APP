import React,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
import Marker from './Marker'
//import InfoWindow from './InfoWindow'
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

    const [infoWindowState, setInfoWindowState] = useState({
        showingInfoWindow: false,
        //activeMarker: {},
        //selectedPlace: {},
      });

    const onMarkerClick = (props, marker, e) =>
     setInfoWindowState({
    // //   selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
     });
 
//   const onMapClicked = (props) => {
//       setInfoWindowState({
//         showingInfoWindow: false,
//         activeMarker: null
//       })
//     }

   function InfoWindow() {
    // if (info === ""){
    //     return null
    // }
    // else {
 
  return (
          <div className="info-window">
                <div className="info-container">
                  <div
                    className="info-flag"
                    
                    style={{ backgroundImage: `url(${info.countryInfo.flag})` }}
                  ></div>
                  <div className="info-name">{info.country}</div>
                  <div className="info-confirmed">
                    Cases: {numeral(info.cases).format("0,0")}
                  </div>
                  <div className="info-recovered">
                    Recovered: {numeral(info.recovered).format("0,0")}
                  </div>
                  <div className="info-deaths">
                    Deaths: {numeral(info.deaths).format("0,0")}
                  </div>
                </div>
            </div>
        )
    
}
return(
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
   {countries ? 
   <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY }}
          center={{lat:center[0], lng:center[1]}}
          zoom={zoom}
          //yesIWantToUseGoogleMapApiInternals
          //onMapClicked={onMapClicked}
        > 


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
        />}

{countries.map(position => (
        <Marker
        key={uuidv4()}
          //onClick={onMarkerClick}
          lat={position.countryInfo.lat}
          lng={position.countryInfo.long}
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
        //   icon={{
        //     url: "/path/to/custom_icon.png",
        //     anchor: new google.maps.Point(32,32),
        //     scaledSize: new google.maps.Size(64,64)
        //   }}
    
       />
))}
{info && infoWindowState && <InfoWindow />}
 
     </GoogleMapReact> : null}
      </div>
      </div>
)
    }

export default Map