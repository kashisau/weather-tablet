import { type GraphData } from '@/common/types/temperatureResponse'
import { createContext, useContext } from 'react'

export interface TemperatureDataContextProps {
  temperatureData: GraphData | null
  setTemperatureData?: (data: GraphData) => void
}

export const TemperatureDataContext = createContext<TemperatureDataContextProps>({
  temperatureData: null,
  setTemperatureData: () => {}
})

export const useTemperatureDataContext: () => TemperatureDataContextProps = () => useContext(TemperatureDataContext)
