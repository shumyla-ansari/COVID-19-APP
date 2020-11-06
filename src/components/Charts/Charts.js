import React from 'react'
import "./charts.css"
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
                        backgroundColor: "rgba(0, 0, 255, 0.5)",
                        opacity: "50%",
                        fill: true
                    }, { 
                        // labels: Object.keys(recovered),
                       
                        data: Object.values(recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        opacity: "50%",
                        fill: true
                    }, {
                    // labels: Object.keys(deaths),
                   
                        data: Object.values(deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        Opacity: "50%",
                        fill: true
                    },],
                }}
            />
   ) : null);



  

    return (
        <div >
           <h1 className="chart-h1">Global Cases Chart</h1>
            { chartData}

        </div>
    )
}

export default Charts
