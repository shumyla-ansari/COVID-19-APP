import React from 'react'


function InfoWindow({ flag, name, cases, recovered, deaths }) {
  // if (info === ""){
  //     return null
  // }
  // else {

  return (
    <div className='info-window'>
      <div className='info-container'>
        <div
          className='info-flag'
          style={{ backgroundImage: `url(${flag})` }}
        ></div>
        <div className='info-name'>{name}</div>
        <div className='info-confirmed'>Cases: {cases}</div>
        <div className='info-recovered'>Recovered: {recovered}</div>
        <div className='info-deaths'>Deaths: {deaths}</div>
      </div>
    </div>
  );
}

export default InfoWindow