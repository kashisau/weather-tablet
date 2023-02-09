import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Time from '@/components/Time/Time'
import CurrentWeatherIcon from '@/components/CurrentWeatherIcon/CurrentWeatherIcon'
import CurrentWeatherStats from '@/components/CurrentWeatherStats/CurrentWeatherStats'
import Forecast from '@/components/Forecast/Forecast'
import TemperatureGraph from '@/components/TemperatureGraph/TemperatureGraph'

const inter = Inter({ subsets: ['latin'] })
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather Tablet Home</title>
        <meta name="description" content="A homepage for the tablet device sitting in the living room, to display the time and some weather data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.summary}>
          <Time />
          <CurrentWeatherIcon />
          <CurrentWeatherStats />
          {/* <TemperatureGraph /> */}
        </div>
        <Forecast/>
        <div className={styles.music}>
          
        </div>
      
    </>
  )
}
