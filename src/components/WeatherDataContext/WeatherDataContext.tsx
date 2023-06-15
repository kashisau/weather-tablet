import { type ErrorResponse } from '@/common/types/errorResponse'
import { type WeatherData } from '@/common/types/weatherResponse'
import { extractDaysForecast, type ForecastDayData } from '@/util/WeatherWizard'
import { useEffect, useState } from 'react'
import { WeatherDataContext } from './UseWeatherData'

const FORECAST_URL = process.env.NEXT_PUBLIC_FORECAST_URL
const FORECAST_TOKEN = process.env.NEXT_PUBLIC_FORECAST_TOKEN

interface WeatherDataProviderProps {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
export const WeatherDataProvider: React.FC<WeatherDataProviderProps> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<ForecastDayData[] | null>(null)

  useEffect(() => {
    const fetchWeatherData = async (): Promise<void> => {
      if (FORECAST_URL === undefined || FORECAST_TOKEN === undefined) {
        throw new Error('Missing environment variables.')
      }

      try {
        const response = await fetch(
          FORECAST_URL,
          {
            headers: {
              Authorization: `Bearer ${FORECAST_TOKEN}`
            }
          })

        const weatherDataResponse: WeatherData | ErrorResponse = await response.json()
        if ('forecasts' in weatherDataResponse) {
          const forecastWeather = extractDaysForecast(weatherDataResponse)
          setWeatherData(forecastWeather)
        } else if ('errors' in weatherDataResponse) {
          console.error('Could not parse weather data response.', weatherDataResponse.errors)
          return
        }
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const forecastUpdate = setInterval(fetchWeatherData, 1000 * 60)

    void fetchWeatherData()

    return () => {
      clearInterval(forecastUpdate)
    }
  }, [])

  return (
    <WeatherDataContext.Provider value={{ weatherData }}>
      {children}
    </WeatherDataContext.Provider>
  )
}

export default WeatherDataProvider
