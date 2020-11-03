import React,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
import Marker from './Marker'
// import numeral from "numeral";
 import Circle from 'google-map-react'
 import InfoWindow from 'google-map-react';


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
const Map = ({countries, location, zoom, center}) =>{ 

//     const [infoWindowState, setInfoWindowState] = useState({
//         showingInfoWindow: false,
//         activeMarker: {},
//         selectedPlace: {},
//       });

//     const onMarkerClick = (props, marker, e) =>
//     setInfoWindowState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
 
//   const onMapClicked = (props) => {
//       setInfoWindowState({
//         showingInfoWindow: false,
//         activeMarker: null
//       })
//     }
  
    
return(
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
   {countries &&  <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY }}
          center={{lat:center[0], lng:center[1]}}
          zoom={zoom}
          //yesIWantToUseGoogleMapApiInternals
          //onMapClicked={onMapClicked}
        >

{/* {countries &&  countries.map((country) => (<Circle
        radius={800}
        center=  {[country.countryInfo.lat, country.countryInfo.long]}     
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />))} */}
          {countries && <Marker
         // onClick={onMarkerClick}
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
         // onClick={onMarkerClick}
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
{/* 
        <InfoWindow
       onOpen={this.windowHasOpened}
 onClose={this.windowHasClosed}
  visible={infoWindowState}>
    <div>
      <h1>{'Hello this is'}</h1>
    </div>
        marker={infoWindowState}
        visible={infoWindowState}
          <div>
            <h1>{'infected'}</h1>
          </div>
      </InfoWindow> */}
     {/* {countries.map(position => ( 
         {{ lat: position.countryInfo.lat, lng: position.countryInfo.long }}}*/
     
    //   {/* ))} */}
       
    
     }</GoogleMapReact> }
      </div>
      </div>
)
    }

export default Map