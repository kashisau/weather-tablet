import { type ReactElement, useEffect, useState } from 'react'
import ForecastDay from '../ForecastDay/ForecastDay'
import styles from './Forecast.module.css'
import { extractDaysForecast, type ForecastDayData, type WillyWeatherForecast } from '../../util/WeatherWizard'

const FORECAST_URL = process.env.NEXT_PUBLIC_FORECAST_URL
const FORECAST_TOKEN = process.env.NEXT_PUBLIC_FORECAST_TOKEN

export default function Forecast (): ReactElement {
  const initialWeatherData: ForecastDayData[] = []
  const [forecastData, setForecastData] = useState(initialWeatherData)

  useEffect(() => {
    async function getForecast (): Promise<void> {
      if (FORECAST_URL === undefined || FORECAST_TOKEN === undefined) {
        throw new Error('Missing environment variables.')
      }

      const forecastFetchResponse = await fetch(FORECAST_URL, {
        headers: {
          Authorization: `Bearer ${FORECAST_TOKEN}`
        }
      })

      const forecast = await forecastFetchResponse.json() as WillyWeatherForecast
      const days = extractDaysForecast(forecast)
      setForecastData(days)
    }
    void getForecast()

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setInterval(getForecast, 1000 * 60)
  }, [])

  return (
        <div className={styles.forecast}>
            {forecastData.map(
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
