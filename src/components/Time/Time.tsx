'use client'

import styles from './Time.module.css'
import { useEffect, useState } from 'react'
import { type ReactElement } from 'react'

export default function Time (): ReactElement {
  const [now, setNow] = useState(extractHourMinute(new Date()))

  function extractHourMinute (date: Date): string {
    const dateIsoParts = date.toLocaleTimeString().split('T')

    if (dateIsoParts.length === 0) { throw new ReferenceError('extractHourMinute must be supplied with a Date object') }

    const timePart = dateIsoParts.pop()
    if (timePart === undefined) { throw new ReferenceError('extractHourMinute must be supplied with a Date object') }

    const [hours, minutes] = timePart.split(':')
    return `${parseInt(hours)}:${minutes}`
  }

  useEffect(() => {
    function refreshNow (): void {
      setNow(extractHourMinute(new Date()))
    }
    refreshNow()
    setInterval(refreshNow, 1000)
  }, [])

  return (
    <h1 className={styles.timeHeading}>{now}</h1>
  )
}
