import React from 'react'
//import Chart from 'chart.js'
import { Line } from 'react-chartjs-2'


function Charts({daily}) {

   const chartData = (
       daily.length
       ? ( 
       <Line
                data = {{
                    labels: daily.map(( { date }) => date),
                    datasets: [ {
                        data: daily.map( ({ confirmed })=> confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        backgroundColor: "#b4ffff",
                        fill: true
                    }, {
                        data: daily.map( ({ deaths })=> deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: '#ff867c',
                        fill: true
                    }]
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
