import React from 'react';

import {
    Link
} from "react-router-dom";

export default function Popup({ gameStatus, handleReplay }) {
    return (
        <div className={`popup ${gameStatus}`}>
            {
                gameStatus == 'game-over-lost' ? 'Game Over' : 'Won'
            }
            <div className='popup-buttons'>
                <Link to='/'>
                    <button className='w3-margin w3-round-xlarge w3-button w3-ripple'>Exit</button>
                </Link>
                <button className='w3-margin w3-round-xlarge w3-button w3-ripple' onClick={() => handleReplay()}>replay</button>
            </div>
        </div>
    )
}
