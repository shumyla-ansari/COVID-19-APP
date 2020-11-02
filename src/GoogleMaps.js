import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
import Marker from './Marker'



const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <Marker
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
      </div>
)

export default Map