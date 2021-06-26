import React from 'react'
import {
    Link
} from "react-router-dom";

export default function HomePage() {
    return (
        <div className='homepage w3-center'>
            <div className=''><b>MINESWEEPER</b></div>
            <div><Link to="/game-page"><button className='w3-button w3-ripple'>Play</button></Link></div>
        </div>
    )
}
