interface WillyWeatherDayEntry {
    dateTime: string,
    precisCode: string,
    precis: string,
    precisOverlayCode: string,
    min: number,
    max: number
}

export interface WillyWeatherDay {
    dateTime: string,
    entries: WillyWeatherDayEntry[]
}

export interface ForecastDayData {
    date: Date,
    weather: WillyWeatherDayEntry
}

export interface WillyWeatherForecast {
    location: {
        id: number,
        name: string,
        region: string,
        postcode: string,
        timeZone: string,
        lat: string,
        lng: string,
        typeId: number
    },
    forecasts: {
        weather: {
            days: WillyWeatherDay[],
            units: {
                temperature: string
            },
            issueDateTime: string
        }
    }
}


interface ParramattaTemperatureHour {
  x: number,
  y: number
}

export interface ParramattaWeatherTemperature {
  data: ParramattaTemperatureHour[]
}

export function extractDaysForecast(forecast: WillyWeatherForecast) {
    const forecastDays: ForecastDayData[] = []

    forecast.forecasts.weather.days.forEach(
        day => {
            const { dateTime, entries } = day
            const dayEntryLast = entries.pop()
            if (!dayEntryLast)
                return

            const dayEntryResult: ForecastDayData = {
                date: new Date(dateTime),
                weather: dayEntryLast
            }
            forecastDays.push(dayEntryResult)
        }
    )
    return forecastDays
}

export const precisCodeIcons = [
    {
      "code": "fine",
      "icon": "weather-icon-sunny.svg"
    },
    {
      "code": "mostly-fine",
      "icon": "weather-icon-sunny.svg"
    },
    {
      "code": "high-cloud",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "partly-cloudy",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "mostly-cloudy",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "cloudy",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "overcast",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "shower-or-two",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "chance-shower-fine",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "chance-shower-cloud",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "drizzle",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "few-showers",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "showers-rain",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "heavy-showers-rain",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "chance-thunderstorm-fine",
      "icon": "weather-icon-stormy.svg"
    },
    {
      "code": "chance-thunderstorm-cloud",
      "icon": "weather-icon-stormy.svg"
    },
    {
      "code": "chance-thunderstorm-showers",
      "icon": "weather-icon-stormy.svg"
    },
    {
      "code": "thunderstorm",
      "icon": "weather-icon-stormy.svg"
    },
    {
      "code": "chance-snow-fine",
      "icon": "weather-icon-sunny.svg"
    },
    {
      "code": "chance-snow-cloud",
      "icon": "weather-icon-mostly-fine.svg"
    },
    {
      "code": "snow-and-rain",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "light-snow",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "snow",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "heavy-snow",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "wind",
      "icon": "weather-icon-sunny.svg"
    },
    {
      "code": "frost",
      "icon": "weather-icon-sunny.svg"
    },
    {
      "code": "fog",
      "icon": "weather-icon-sunny.svg"
    },
    {
      "code": "hail",
      "icon": "weather-icon-rainy.svg"
    },
    {
      "code": "dust",
      "icon": "weather-icon-sunny.svg"
    }
  ]