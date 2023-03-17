import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import Time from '@/components/Time/Time'
import CurrentWeatherIcon from '@/components/CurrentWeatherIcon/CurrentWeatherIcon'
import Forecast from '@/components/Forecast/Forecast'
import TemperatureGraph from '@/components/TemperatureGraph/TemperatureGraph'
import { type ReactElement } from 'react'

export default function Home (): ReactElement {
  const NEXT_PUBLIC_ROON_DISPLAY_URL = process.env.NEXT_PUBLIC_ROON_DISPLAY_URL
  return (
    <>
      <Head>
        <title>Weather Tablet Home</title>
        <meta name="description" content="A homepage for the tablet device sitting in the living room, to display the time and some weather data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
        <div className={styles.summary}>
          <Time />
          <CurrentWeatherIcon />
          <TemperatureGraph />
        </div>
        <Forecast/>
        <div className={styles.music}>
          <iframe
            src={NEXT_PUBLIC_ROON_DISPLAY_URL}
            width="100%"
            height="100%"
            className={styles.roonIframe}
            />
        </div>

    </>
  )
}
