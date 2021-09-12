import React, { useEffect, useState } from 'react'

export default function Timer({setTimeSpent, gameOver}) {
    const [time,setTime] = useState(0)
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')

    useEffect(() => {
        setTimeSpent && setTimeSpent(`${minutes}:${seconds}`);
        if(gameOver) {
            setTime(0);
            return
        }
        setTimeout(() => {
            setTime(time+1)
            let seconds = (time) % 60
            let minutes = Math.floor(time / 60)
            seconds = seconds.toString()
            minutes = minutes.toString()
            if (seconds.length == 1) {
                seconds = '0' + seconds
            }
            if (minutes.length == 1) {
                minutes = '0' + minutes
            }
            setSeconds(seconds)
            setMinutes(minutes)
        }, 1000);
    }, [time,gameOver])

    return (
        <div className='timer  w3-margin'>
            <i class="fas fa-3x fa-stopwatch"></i>
            <div className='w3-xxlarge secondary-font'>{minutes}:{seconds}</div>
        </div>
    )
}
