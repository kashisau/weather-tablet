export interface DataPoint {
  x: string
  y: number
}

export interface TemperatureData {
  history: DataPoint[]
  forecast: DataPoint[]
}

export interface TemperatureResponse {
  data: TemperatureData
}
