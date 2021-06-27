import React, { useState } from 'react'
import MineField from './MineField';
import {
    Link
} from "react-router-dom";
import Popup from './Popup';

export default function GamePage() {
    const [option, setOption] = useState('step');
    const [gameStatus, setGameStatus] = useState('started');
    const [resetMine, setResetMine] = useState(false)

    const handleReplay = () => {
        setResetMine(!resetMine);
    }

    return (
        <div className='game-page'>
            {
                gameStatus !== 'started' && <Popup gameStatus={gameStatus} handleReplay={handleReplay} />
            }
            <div className='w3-col l12 m12 s12'>
                <Link to="/">
                    <div href="/" className='w3-xxxlarge' style={{ height: '100px' }}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </div>
                </Link>
            </div>
            <div>
                <div className='w3-col l8 m8 s12 w3-center'>
                    <MineField option={option} gameStatus={gameStatus} setGameStatus={(status) => setGameStatus(status)} resetMine={resetMine} />
                </div>
                <div className='w3-col l4 m4 s12 options'>
                    <div className='w3-col l12 m12 s6'>
                        <button
                            className={`option  ${option === 'step' ? 'selected' : ''}`}
                            onClick={() => setOption('step')}
                        >Step <i className="fas fa-shoe-prints"></i></button>
                    </div>
                    <div className='w3-col l12 m12 s6'>
                        <button
                            className={`option ${option === 'flag' ? 'selected' : ''}`}
                            onClick={() => setOption('flag')}
                        >Flag <i className="far fa-flag"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
