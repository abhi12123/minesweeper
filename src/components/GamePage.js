import React, { useState } from 'react'
import MineField from './MineField';
import { useRoutes, A } from "hookrouter";

export default function GamePage() {
    const [option, setOption] = useState('step');
    const [gameStatus, setGameStatus] = useState('started')
    return (
        <div style={{display:'flex'}}>
            <A href="/" className='w3-button w3-ripple w3-jumbo' style={{height:'100px'}}><i className="fas fa-long-arrow-alt-left"></i></A>
            <MineField option={option} gameStatus={gameStatus} setGameStatus={(status) => setGameStatus(status)} />
            <div style={{display:'flex',flexDirection:'column'}}>
                <button
                    className={`w3-button w3-border w3-xxxlarge ${option == 'step' ? 'w3-grey' : ''}`}
                    onClick={() => setOption('step')}
                >Step<i className="fas fa-shoe-prints"></i></button>
                <button
                    className={`w3-button w3-border w3-xxxlarge ${option == 'flag' ? 'w3-grey' : ''}`}
                    onClick={() => setOption('flag')}
                >Flag<i className="far fa-flag"></i></button>
                <div>{
                    gameStatus == 'game-over-lost' ?
                        <div className='w3-jumbo w3-red'>Game Over</div> : null
                }
                {
                    gameStatus == 'game-over-won' ?
                        <div className='w3-jumbo w3-green'>Won</div> : null
                }</div>
            </div>
        </div>
    )
}
