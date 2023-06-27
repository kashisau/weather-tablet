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

export interface GraphData {
  datasets: Dataset[]
}

export interface Dataset {
  id: string
  data: any[] // You can replace 'any' with a more specific type if you have one
}
