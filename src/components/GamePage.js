import React, { useState } from 'react'
import MineField from './MineField';
import {
    Link
} from "react-router-dom";
import Popup from './Popup';
import MoveSelector from './MoveSelector';
import Navbar from './Navbar';

export default function GamePage() {
    const [option, setOption] = useState('step');
    const [gameStatus, setGameStatus] = useState('started');
    const [resetMine, setResetMine] = useState(false)

    const handleReplay = () => {
        setResetMine(!resetMine);
    }

    return (
        <div className='game-page'>
            <div className='w3-hide-large w3-hide-medium'>
                <Navbar/>
            </div>
            {
                gameStatus !== 'started' && <Popup gameStatus={gameStatus} handleReplay={handleReplay} />
            }
            <div className='w3-col l2 m2 s12'>
                <div className='nav-icons w3-hide-small'>
                    <Link to="/">
                        <div>
                            <i class="fas fa-3x fa-home"></i>
                        </div>
                    </Link>
                    <Link to="/">
                        <div>
                            <i class="fas fa-3x fa-question"></i>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <div className='w3-col l8 m8 s12 w3-center'>
                    <div className='timer'>
                        <i class="fas fa-6x fa-stopwatch"></i>
                        <div className='w3-xxxlarge'>1:02</div>
                    </div>
                    <div className='w3-hide-large w3-hide-medium'>
                        <MoveSelector/>
                    </div>
                    <MineField option={option} gameStatus={gameStatus} setGameStatus={(status) => setGameStatus(status)} resetMine={resetMine} />
                </div>
                {/* <div className='w3-col l4 m4 s12 options'>
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
                </div> */}
            </div>
            <div className='w3-col l2 m2 s12 w3-hide-small'>
                <MoveSelector />
            </div>
        </div>
    )
}
