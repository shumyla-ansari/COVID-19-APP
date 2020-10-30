import React from 'react'
import Chart from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'


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
                        backgroundColor: "lightblue",
                        fill: true
                    }, {
                        data: daily.map( ({ deaths })=> deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }]
                }}
            />
   ) : null);

    return (
        <div >
           
            {chartData}

        </div>
    )
}

export default Charts
