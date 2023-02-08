import { precisCodeIcons } from '@/util/WeatherWizard';
import styles from './ForecastDay.module.css'

interface ForecastDayInput {
    day: string,
    outlook: string,
    dayMax: number,
    dayMin: number
}

export default function ForecastDay({day, outlook, dayMax, dayMin} : ForecastDayInput) {

    function coalescePrecisCodes(precisCode: string) {
        const iconFilename = precisCodeIcons.find(precisIcon => precisIcon.code === precisCode);
        if (! iconFilename) return 'weather-icon-mostly-fine.svg'
        return iconFilename.icon
    }

    return (
        <div className={styles.forecastDay}>
            <h2 className={styles.forecastDayText}>{day.substring(0, 3)}</h2>
            <div className={styles.forecastDayIconFrame}>
                <img className={styles.forecastDayIcon} src={`/images/${coalescePrecisCodes(outlook)}`} width="120" alt={`${day} is looking ${outlook}`} />
            </div>
            <p className={styles.dayMax}>{dayMax}</p>
            <p className={styles.dayMin}>{dayMin}</p>
        </div>
    );
}