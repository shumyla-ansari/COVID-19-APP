import React, { useState } from "react";
import numeral from "numeral";
import { v4 as uuidv4 } from "uuid";
import "./Map.css";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map({ countries, location, zoom, center, info, }) {
  const [selectedInfo, setSelectedInfo] = useState(false)

  console.log(countries);

  return (

    
    <GoogleMap zoom={zoom} center={{ lat: center[0], lng: center[1] }}>
      {countries &&
        countries.map((country, index) => (
          <Marker
            key={uuidv4()}
            position={{
              lat: country.countryInfo.lat,
              lng: country.countryInfo.long,
            }}
            onClick={(e) => setSelectedInfo({ showInfo: true, country: country})}
        / >))}

      {countries  && selectedInfo.showInfo &&  (
        <InfoWindow style={{height : "50px", width : "25px"}}
           onCloseClick={(e) => setSelectedInfo({showInfo: false, country : null})}
          
          position={{
            lat: selectedInfo.country.countryInfo.lat,
            lng: selectedInfo.country.countryInfo.long,
          }}
      >
          <div className='info-window'>
            <div className='info-container'>
              <div
                className='info-flag'
                style={{
                  backgroundImage: `url(${selectedInfo.country.countryInfo.flag})`,
                }}
              ></div>
              <div className='info-name'>{selectedInfo.country.country}</div>
              <div className='info-confirmed'>
                Cases:{numeral(selectedInfo.country.cases).format("0,0")}
              </div>
              <div className='info-recovered'>
                Recovered:{numeral(selectedInfo.country.recovered).format("0,0")}{" "}
              </div>
              <div className='info-deaths'>
                Deaths:{numeral(selectedInfo.country.deaths).format("0,0")}
              </div>
            </div>
          </div>
        </InfoWindow>
      ) }
 
   
    </GoogleMap>
  );
}

export const MapWrapped = withScriptjs(withGoogleMap(Map));
