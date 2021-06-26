import React from 'react';
import { useRoutes, A } from "hookrouter";

export default function Popup({ gameStatus, handleReplay }) {
    return (
        <div className={`popup ${gameStatus}`}>
            {
                gameStatus == 'game-over-lost' ? 'Game Over' : 'Won'
            }
            <div className='popup-buttons'>
                <A href="/" style={{ height: '100px' }}>
                    <button className='w3-button w3-ripple'>Exit</button>
                </A>
                <button className='w3-button w3-ripple' onClick={()=>handleReplay()}>replay</button>
            </div>
        </div>
    )
}
