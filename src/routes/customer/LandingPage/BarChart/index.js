import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun']
const data = {
  labels,
  datasets: [
    {
      label: 'my first dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30]
    }
  ]
}

const BarChart = () => {
  return <Doughnut data={data} />
}

export default BarChart
