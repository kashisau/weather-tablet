import { type ErrorResponse } from '@/common/types/errorResponse'
import { type TemperatureResponse, type GraphData } from '@/common/types/temperatureResponse'
import { useEffect, useState } from 'react'
import { TemperatureDataContext } from './UseTemperatureData'

const TEMPERATURE_URL = process.env.NEXT_PUBLIC_TEMPERATURE_URL
const TEMPERATURE_TOKEN = process.env.NEXT_PUBLIC_TEMPERATURE_TOKEN

interface TemperatureDataProviderProps {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
export const TemperatureDataProvider: React.FC<TemperatureDataProviderProps> = ({ children }) => {
  const [temperatureData, setTemperatureData] = useState<GraphData | null>(null)

  useEffect(() => {
    const fetchTemperatureData = async (): Promise<void> => {
      if (TEMPERATURE_URL === undefined || TEMPERATURE_TOKEN === undefined) {
        throw new Error('Missing environment variables: TEMPERATURE_URL or TEMPERATURE_TOKEN')
      }

      try {
        const response = await fetch(
          TEMPERATURE_URL,
          {
            headers: {
              Authorization: `Bearer ${TEMPERATURE_TOKEN}`
            }
          })

        const temperatureDataResponse: TemperatureResponse | ErrorResponse = await response.json()
        if ('data' in temperatureDataResponse) {
          const { data: { history, forecast } } = temperatureDataResponse
          const graphData: GraphData = {
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
        } else if ('errors' in temperatureDataResponse) {
          console.error('Could not parse weather data response.', temperatureDataResponse.errors)
          return
        }
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const temperatureUpdate = setInterval(fetchTemperatureData, 5 * 1000 * 60)

    void fetchTemperatureData()

    return () => {
      clearInterval(temperatureUpdate)
    }
  }, [])

  return (
    <TemperatureDataContext.Provider value={{ temperatureData }}>
      {children}
    </TemperatureDataContext.Provider>
  )
}

export default TemperatureDataProvider
