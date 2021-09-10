import React from 'react'
import {
    Link
} from "react-router-dom";

export default function HomePage() {
    return (
        <div className='homepage w3-center'>
            <div className=''><b>MINESWEEPER</b></div>
            <div><Link to="/select-difficulty"><button className='hover-stroke'>Play</button></Link></div>
            <div><Link to="/game-page/tutorial"><button className='hover-stroke'>How to Play</button></Link></div>
            <div className='icons'><i class="fas fa-share-alt fa-3x"></i><i class="fab fa-github fa-3x"></i></div>
            <div className='w3-small secondary-font'>created by Abhinav</div>
        </div>
    )
}
