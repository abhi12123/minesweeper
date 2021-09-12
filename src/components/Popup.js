import React from 'react';

import {
    Link
} from "react-router-dom";

export default function Popup({ gameStatus, handleReplay, timeSpent }) {
    return (
        <div className={`popup ${gameStatus}`}>
            {
                gameStatus === 'game-over-lost' ? <p className=' secondary-font'>💀Game Over💀<br/>Time Spent : {timeSpent}</p> : <p className=' secondary-font'>🎉Conrats! You Won🎉<br/>Time Spent : {timeSpent}</p>
            }
            <div className='popup-buttons'>
                <Link to='/'>
                    <button className='w3-button w3-ripple secondary-font'>Exit</button>
                </Link>
                <button className='w3-button w3-ripple secondary-font' onClick={() => handleReplay()}>replay</button>
            </div>
        </div>
    )
}
