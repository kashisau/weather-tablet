import { type ForecastDayData } from '@/util/WeatherWizard'
import { createContext, useContext } from 'react'

export interface WeatherDataContextProps {
  weatherData: ForecastDayData[] | null
  setWeatherData?: (data: ForecastDayData[]) => void
}

export const WeatherDataContext = createContext<WeatherDataContextProps>({
  weatherData: null,
  setWeatherData: () => {}
})

export const useWeatherDataContext: () => WeatherDataContextProps = () => useContext(WeatherDataContext)
