'use client'
import { type ReactElement } from 'react'
import { coalescePrecisCodes } from '../ForecastDay/ForecastDay'
import { useTemperatureDataContext } from '../TemperatureDataContext/UseTemperatureData'
import { useWeatherDataContext } from '../WeatherDataContext/UseWeatherData'
import styles from './CurrentWeatherIcon.module.css'

export default function CurrentWeatherIcon (): ReactElement {
  const { weatherData } = useWeatherDataContext()
  const { temperatureData } = useTemperatureDataContext()

  if (weatherData === null) return <></>
  if (temperatureData === null) return <></>

  const today = weatherData[0]
  const precisCode = today.weather.precisCode

  const { datasets: [, forecast] } = temperatureData
  const forecastNext = forecast.data.pop()

  return (
        <>
          <img className={styles.currentWeatherIcon} src={`/images/${coalescePrecisCodes(precisCode)}`} width="120" alt={`Today is looking ${precisCode}`} />
          <h2 className={styles.currentTemperature}><img className={styles.roomIcon} src="/images/tree.svg" alt="Current outside temperature" /> {forecastNext.y}°C</h2>
        </>
  )
}
