import React from 'react'
//import Chart from 'chart.js'
import { Line } from 'react-chartjs-2'


function Charts({daily: {cases, recovered, deaths}}) {
    console.log(cases)

   const chartData = (
       cases && cases
       ? ( 
       <Line
                data = {{
                    labels: Object.keys(cases),
                    datasets: [ {
                        data: Object.values(cases),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        backgroundColor: "#b4ffff",
                        fill: true
                    }, { 
                        // labels: Object.keys(recovered),
                       
                        data: Object.values(recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true
                    }, {
                    // labels: Object.keys(deaths),
                   
                        data: Object.values(deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: '#ff867c',
                        fill: true
                    },],
                }}
            />
   ) : null);



  

    return (
        <div >
           
            { chartData}

        </div>
    )
}

export default Charts
