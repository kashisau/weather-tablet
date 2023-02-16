/* eslint-disable react/prop-types */
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  defaults
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const switchYAxisLines = (lineIndex) => {
  const minor = 'rgba(199,209,217,0.25)'
  const major = 'rgba(199,209,217,0.25)'
  const axis = '#979797'

  switch (lineIndex) {
    case 2:
    case 4:
    case 6:
      return major
    case 0:
      return axis
    case 7:
    case 8:
    default:
      return minor
  }
}

const colours = Array.from(Array(10)).map((_, i) => switchYAxisLines(i))

defaults.font.family = 'Outfit'
defaults.font.size = 24
defaults.font.weight = 'bold'
defaults.color = 'white'

export const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: 'Daily temperature'
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      min: 0,
      max: 40,
      drawTicks: false,
      grid: {
        lineWidth: [2, 2, 5, 2, 5, 2, 5, 2, 0],
        color: colours
      },
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function (value, index) {
          switch (index) {
            case 2:
            case 4:
            case 6:
              return `${this.getLabelForValue(value)}°C`
            case 0:
            default:
              return ''
          }
        }
      }
    },
    x: {
      display: true,
      grid: {
        lineWidth: 0,
        color: ['rgba(0,0,0,0)']
      },
      ticks: {
        font: {
          size: '12px',
          weight: 'normal'
        }
      }
    }
  }
}

const centreChildStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  margin: '0 80px'
}

export default function TemperatureChartjs ({ temperatureData }) {
  temperatureData.datasets[0] = {
    ...temperatureData.datasets[0],
    borderWidth: 7,
    borderColor: '#22BA8E',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    tension: 0.5,
    pointRadius: 0
  }
  temperatureData.datasets[1] = {
    ...temperatureData.datasets[1],
    borderColor: 'rgba(255, 99, 132, 0)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    pointRadius: 7,
    pointBorderWidth: 3,
    pointBorderColor: '#9780A6',
    pointBackgroundColor: '#C7D1D9'

  }
  return <Line style={centreChildStyle} height={'100%'} options={chartOptions} data={temperatureData} />
}
