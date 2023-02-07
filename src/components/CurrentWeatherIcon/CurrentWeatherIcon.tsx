'use client';
import styles from './currentWeatherIcon.module.css'
export default function CurrentWeatherIcon() {

    return (
        <img className={styles.currentWeatherIcon}
         src="/images/weather-icon-sunny.svg"
         alt="A sunny day"
        />
    );
}