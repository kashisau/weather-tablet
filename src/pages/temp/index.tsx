import Head from 'next/head'

import styles from './Temp.module.css'

import { useEffect, useState, type ReactElement } from 'react'
import HomeTempSquare from '@/components/HomeTempSquare/HomeTempSquare'

const ROOM_TEMP_URL = process.env.NEXT_PUBLIC_ROOM_TEMP_URL
const ROOM_TEMP_TOKEN = process.env.NEXT_PUBLIC_ROOM_TEMP_TOKEN

export interface Temperatures {
  Hour: number
  Date: Date
  Balcony: number
  Bedroom: number
  'Living Room': number
  Office: number
}

export default function Temp (): ReactElement {
  const [bedroomTemp, setBedroomTemp] = useState<number | null>(null)
  const [livingRoomTemp, setLivingRoomTemp] = useState<number | null>(null)
  const [officeTemp, setOfficeTemp] = useState<number | null>(null)
  const [outsideTemp, setOutsideTemp] = useState<number | null>(null)

  useEffect(() => {
    async function getRoomTemps (): Promise<void> {
      if (ROOM_TEMP_URL === undefined || ROOM_TEMP_TOKEN === undefined) {
        throw new Error('Missing environment variables.')
      }

      const temperatureFetchResponse = await fetch(ROOM_TEMP_URL, {
        headers: {
          Authorization: `Bearer ${ROOM_TEMP_TOKEN}`
        }
      })

      const roomTemps = await temperatureFetchResponse.json() as Temperatures

      setBedroomTemp(Math.round(roomTemps.Bedroom * 10) / 10)
      setLivingRoomTemp(Math.round(roomTemps['Living Room'] * 10) / 10)
      setOfficeTemp(Math.round(roomTemps.Office * 10) / 10)
      setOutsideTemp(Math.round(roomTemps.Balcony * 10) / 10)
    }
    void getRoomTemps()

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const roomTempUpdate = setInterval(getRoomTemps, 1000 * 60)

    return () => {
      clearInterval(roomTempUpdate)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Weather Tablet Home</title>
        <meta name="description" content="A homepage for the tablet device sitting in the living room, to display the time and some weather data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.summary}>
        <h1 className={styles.heading}>
        Fennell me home
        </h1>
        <HomeTempSquare
          room="Bedroom"
          temperature={bedroomTemp}
          roomIconFilepath="/images/double-bed.svg"
        />
        <HomeTempSquare
          room="Living Room"
          temperature={livingRoomTemp}
          roomIconFilepath="/images/living-room.svg"
        />
        <HomeTempSquare
          room="Office"
          temperature={officeTemp}
          roomIconFilepath="/images/workplace.svg"
        />
        <HomeTempSquare
          room="Outside"
          temperature={outsideTemp}
          roomIconFilepath="/images/tree.svg"
        />
    </div>
    </>
  )
}
