'use client';

import styles from './Time.module.css'
import { useEffect, useState } from 'react';

export default function Time() {
    const [now, setNow] = useState(extractHourMinute(new Date()))

    function refreshNow() {
        setNow(extractHourMinute(new Date()))
    }

    function extractHourMinute(date: Date): string {
        const dateIsoParts = date.toLocaleTimeString().split('T')

        if (!dateIsoParts)
            throw new ReferenceError("extractHourMinute must be supplied with a Date object")

        const timePart = dateIsoParts.pop()
        if (!timePart)
            throw new ReferenceError("extractHourMinute must be supplied with a Date object")
        
        const [hours, minutes, secondsAndTimezone] = timePart.split(':')
        return `${parseInt(hours)}:${minutes}`
        
    }

    useEffect(() => {
        setInterval(refreshNow, 1000);
      }, []);

    return (
        <h1 className={styles.timeHeading}>{now}</h1>
    );
}