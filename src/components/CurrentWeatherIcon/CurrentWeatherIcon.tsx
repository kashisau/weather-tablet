'use client'
import { type ReactElement } from 'react'
import styles from './CurrentWeatherIcon.module.css'

export default function CurrentWeatherIcon (): ReactElement {
  return (
        <img className={styles.currentWeatherIcon}
         src="/images/weather-icon-sunny.svg"
         alt="A sunny day"
        />
  )
}
