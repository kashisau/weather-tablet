import { useEffect, useState } from 'react'
// import  TemperatureNovoChart  from './TemperatureNovoChart/TemperatureNovoChart'
// import TemperatureRecharts from './TemperatureRecharts/TemperatureRecharts'
import TemperatureChartjs from './TemperatureChartjs/TemperatureChartjs'

const TEMPERATURE_URL = process.env.NEXT_PUBLIC_TEMPERATURE_URL
const TEMPERATURE_TOKEN = process.env.NEXT_PUBLIC_TEMPERATURE_TOKEN

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function TemperatureGraph () {
  const [temperatureData, setTemperatureData] = useState(undefined)
  useEffect(() => {
    getTemperature()
    const temperatureUpdate = setInterval(getTemperature, 5 * 60 * 1000)
    return () => {
      clearInterval(temperatureUpdate)
    }
  }, [])

  async function getTemperature () {
    if (!TEMPERATURE_URL || !TEMPERATURE_TOKEN) {
      throw new Error('Missing environment variables: TEMPERATURE_URL or TEMPERATURE_TOKEN')
    }

    const TemperatureFetchResponse = await fetch(TEMPERATURE_URL, {
      headers: {
        Authorization: `Bearer ${TEMPERATURE_TOKEN}`
      }
    })

    const temperature = await TemperatureFetchResponse.json()

    const { data: { history, forecast } } = temperature
    const graphData = {
      datasets: [
        {
          id: 'history',
          data: []
        },
        {
          id: 'forecast',
          data: []
        }
      ]
    }
    history.forEach(hour => {
      graphData.datasets[0].data.push({ x: hour.x, y: hour.y })
      // Dummmy
      graphData.datasets[1].data.push({ x: hour.x, y: null })
    })
    forecast.forEach(hour => {
      // Dummmy
      graphData.datasets[0].data.push({ x: hour.x, y: null })
      graphData.datasets[1].data.push({ x: hour.x, y: hour.y })
    })
    setTemperatureData(graphData)
  }

  if (!temperatureData) {
    return <>Loading...</>
  }

  return (
    <div style={{ gridRow: '1 / 4', position: 'relative' }}>
      {/* <TemperatureNovoChart temperatureData={temperatureData} /> */}
      {/* <TemperatureRecharts temperatureData={temperatureData} /> */}
      <TemperatureChartjs temperatureData={temperatureData} />
    </div>)
}
