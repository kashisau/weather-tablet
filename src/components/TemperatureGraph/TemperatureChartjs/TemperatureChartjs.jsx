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

import annotationPlugin from 'chartjs-plugin-annotation'

import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
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
defaults.font.size = 28
defaults.font.weight = 'bold'
defaults.color = 'white'

export const chartOptions = {
  animation: false,
  animations: {
    colors: false,
    x: false,
    active: {
      animation: {
        duration: 0
      }
    }
  },
  layout: {
    padding: 40
  },
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: 'Daily temperature'
    },
    legend: {
      display: false
    },
    annotation: {
      annotations: {}
    }
  },
  scales: {
    y: {
      min: 0,
      max: 40,
      drawTicks: false,
      grid: {
        lineWidth: [2, 1, 5, 1, 5, 1, 5, 1, 0],
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
          size: '16px'
        },
        callback: function (value, index) {
          if ((index - 1) % 3 !== 0) return ''
          return `${this.getLabelForValue(value)}`
        }
      }
    }
  }
}

const centreChildStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  margin: '0'
}

const coolColour = '0AD2FA'
const hotColour = 'FF1A00'

function interpolateColour (c0, c1, f) {
  c0 = c0.match(/.{1,2}/g).map((oct) => parseInt(oct, 16) * (1 - f))
  c1 = c1.match(/.{1,2}/g).map((oct) => parseInt(oct, 16) * f)
  const ci = [0, 1, 2].map(i => Math.min(Math.round(c0[i] + c1[i]), 255))
  return ci.reduce((a, v) => ((a << 8) + v), 0).toString(16).padStart(6, '0')
}

const annotationTemplate = {
  type: 'line',
  xMin: undefined,
  xMax: undefined,
  borderColor: 'rgba(199, 209, 217, 0.25)',
  borderDash: [4, 1],
  borderWidth: 4
}

export default function TemperatureChartjs ({ temperatureData }) {
  const currentTime = new Date()
  const currentHour = currentTime.getHours() + currentTime.getMinutes() / 60

  chartOptions.plugins.annotation.annotations.line1 = {
    ...annotationTemplate,
    xMin: currentHour,
    xMax: currentHour,
    z: 9
  }

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
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderDash: [5, 5],
    tension: 0.2,
    pointRadius: 10,
    pointBorderWidth: 2,
    pointBorderColor: function (data) {
      const { parsed: { y } } = data
      const dotColour = interpolateColour(coolColour, hotColour, y / 40)
      const dotBorderColour = interpolateColour(dotColour, 'ffffff', 0.5)
      return `#${dotBorderColour}`
    },
    pointBackgroundColor: function (data) {
      const { parsed: { y } } = data
      const dotColour = interpolateColour(coolColour, hotColour, y / 40)
      return `#${dotColour}`
    },
    pointShadowOffsetX: 2,
    pointShadowOffsetY: 2,
    pointShadowBlur: 4,
    pointShadowColor: 'rgba(0,0,0,0.45)',
    z: 10

  }
  return <Line style={centreChildStyle} options={chartOptions} data={temperatureData} />
}
