import React from 'react'
import numeral from "numeral";

 function InfoWindow({info}) {
    console.log(info)
    return (
    info &&    <div className="info-Window">
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


export default InfoWindow
