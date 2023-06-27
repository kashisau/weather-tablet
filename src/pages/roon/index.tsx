import Head from 'next/head'
import styles from './Roon.module.css'

import Time from '@/components/Time/Time'
import { type ReactElement } from 'react'
import WeatherDataProvider from '@/components/WeatherDataContext/WeatherDataContext'
import TemperatureDataProvider from '@/components/TemperatureDataContext/TemperatureDataContext'

export default function Home (): ReactElement {
  const NEXT_PUBLIC_ROON_DISPLAY_URL = process.env.NEXT_PUBLIC_ROON_DISPLAY_URL

  return (
    <>
      <Head>
        <title>Roon display</title>
        <meta name="description" content="Maintains the key weather info and displays a Roon Display in an iframe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <WeatherDataProvider>
        <TemperatureDataProvider>
        <div className={styles.summary}>
          <Time />
        </div>
        <iframe
          src={NEXT_PUBLIC_ROON_DISPLAY_URL}
          className={styles.roonIframe}
          title="Roon display"
        />
        </TemperatureDataProvider>
      </WeatherDataProvider>
    </>
  )
}
