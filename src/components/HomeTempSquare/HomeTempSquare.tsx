import { type ReactElement } from 'react'
import styles from './HomeTempSquare.module.css'

interface Props {
  room: string
  temperature: number | null
  roomIconFilepath: string
}

export default function HomeTempSquare ({ room, temperature, roomIconFilepath }: Props): ReactElement {
  return (
    <div className={styles.room}>
        <h2><img className={styles.roomIcon} src={roomIconFilepath} alt={`${room} icon`} /> {room}</h2>
        <h3 className={styles.temperature}>{(temperature != null) ? temperature : '--'}°C</h3>
    </div>
  )
}
