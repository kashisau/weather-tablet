'use client'
import { type ReactElement } from 'react'
import styles from './CurrentWeatherStats.module.css'

export default function CurrentWeatherStats (): ReactElement {
  return (
        <section className={styles.currentWeatherStats}>
            <div className={styles.temperatureStat}>
                <img src="/images/home-icon.svg" height="48" alt="Home icon" />
                <h2 className={styles.homeTemperature}>--°C</h2>
            </div>
            <div className={styles.temperatureStat}>
                <img src="/images/outside-icon.svg" height="48" alt="Home icon" />
                <h2 className={styles.outsideTemperature}>--°C</h2>
            </div>
        </section>
  )
}
