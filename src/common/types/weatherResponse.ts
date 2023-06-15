interface Location {
  id: number
  name: string
  region: string
  state: string
  postcode: string
  timeZone: string
  lat: number
  lng: number
  typeId: number
}

interface ForecastEntry {
  dateTime: string
  precisCode: string
  precis: string
  precisOverlayCode: string
  night: boolean
  min: number
  max: number
}

export interface ForecastDay {
  dateTime: string
  entries: ForecastEntry[]
}

interface WeatherForecast {
  days: ForecastDay[]
  units: {
    temperature: string
  }
  issueDateTime: string
}

export interface WeatherData {
  location: Location
  forecasts: {
    weather: WeatherForecast
  }
}

export interface WeatherResponse {
  data: WeatherData
}
