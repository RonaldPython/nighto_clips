'use client'

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({claims, names}: DoughnutChartProps) => {

  const data = {
    datasets: [
        {
            label: "Airdrops",
            data: claims,
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
        }
    ],
    labels: names
  }


  return <Doughnut 
  data={data}
  options={{
    cutout: '60%',
    plugins: {
        legend: {
            display: false
        }
    }
  }}
   />
}

export default DoughnutChart
