import { type ReactElement } from 'react'

import ForecastDay from '../ForecastDay/ForecastDay'
import { useWeatherDataContext } from '../WeatherDataContext/UseWeatherData'
import styles from './Forecast.module.css'

export default function Forecast (): ReactElement {
  const { weatherData } = useWeatherDataContext()

  if (weatherData == null) return <p>Loading...</p>
  return (
        <div className={styles.forecast}>
            {weatherData?.map(
              day => (
                    <ForecastDay
                        day={day.date.toLocaleString('en-us', { weekday: 'long' })}
                        outlook={day.weather.precisCode}
                        dayMax={day.weather.max}
                        dayMin={day.weather.min}
                        key={day.date.toLocaleDateString()}
                    />
              )
            )}

        </div>
  )
}
