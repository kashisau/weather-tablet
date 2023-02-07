import styles from './Forecast.module.css'

interface ForecastInput {
    day: string,
    outlook: string,
    dayMax: number,
    dayMin: number
}

export default function Forecast({day, outlook, dayMax, dayMin} : ForecastInput) {

    return (
        <div className={styles.forecast}>
            <h2 className={styles.forecastDay}>{day.substring(0, 3)}</h2>
            <div className={styles.forecastIconFrame}>
                <img className={styles.forecastIcon} src={`/images/weather-icon-${outlook}.svg`} width="120" alt={`${day} is looking ${outlook}`} />
            </div>
            <p className={styles.dayMax}>{dayMax}</p>
            <p className={styles.dayMin}>{dayMin}</p>
        </div>
    );
}