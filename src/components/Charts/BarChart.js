import React from 'react'
//import Chart from 'chart.js'
import {  Bar } from 'react-chartjs-2'
//
function BarChart({barState: {lastUpdate, recovered, deaths, confirmed}, barCountry}) {
    //console.log(confirmed)
 const barChart = (
 barCountry &&    confirmed
        ?(
            <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                     'rgba(0, 0, 255, 0.5)',
                  'rgba(0, 255, 0, 0.5)',
                  'rgba(255, 0, 0, 0.5)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]

                    //data:[confirmed.value, recovered.value, deaths.value]
                }],
             }}
            options={{
                legend: { display: true},
               // title: {display: true, text: 'hjhjkhkjhjkhk'}
                title: { display: true, text: `Current state in ${barCountry}`}
 
            }}
                />
        ) 
        : null
   );

  //  console.log(barData )
    return (
        <div>
          {barChart}
        </div>
    )
}

export default BarChart
