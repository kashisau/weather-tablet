'use client'
import { type ReactElement } from 'react'
import { coalescePrecisCodes } from '../ForecastDay/ForecastDay'
import { useWeatherDataContext } from '../WeatherDataContext/UseWeatherData'
import styles from './CurrentWeatherIcon.module.css'

export default function CurrentWeatherIcon (): ReactElement {
  const { weatherData } = useWeatherDataContext()

  if (weatherData === null) return <></>

  const today = weatherData[0]
  const precisCode = today.weather.precisCode

  return (
        <img className={styles.currentWeatherIcon} src={`/images/${coalescePrecisCodes(precisCode)}`} width="120" alt={`Today is looking ${precisCode}`} />
  )
}
