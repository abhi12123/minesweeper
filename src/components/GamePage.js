import React, { useEffect, useState } from 'react'
import MineField from './MineField';
import {
    Link,
    useParams,
} from "react-router-dom";
import Popup from './Popup';
import MoveSelector from './MoveSelector';
import Navbar from './Navbar';
import Timer from './Timer';
import Confetti from './Confetti';

export default function GamePage() {
    const [option, setOption] = useState('step');
    const [gameStatus, setGameStatus] = useState('started');
    const [resetMine, setResetMine] = useState(false);
    const [timeSpent,setTimeSpent] = useState('00:00')

    const handleReplay = () => {
        setResetMine(!resetMine);
    }

    const handlePopUp = () => {
            return <>
            {gameStatus != 'game-over-lost' && <Confetti />}
            <Popup gameStatus={gameStatus} handleReplay={handleReplay} timeSpent={timeSpent}/>
            </> 
    }

    const findLevel = {
        '5X5': 5,
        '7X7': 7,
        '9X9': 9,
        'tutorial': 'tutorial'
    }

    const { level } = useParams();

    return (
        <div className='game-page'>
            <div className='w3-hide-large w3-hide-medium'>
                <Navbar />
            </div>
            {
                gameStatus !== 'started' && handlePopUp()
            }
            <div className='w3-col l2 m2 s12'>
                <div className='nav-icons w3-hide-small'>
                    <Link to="/">
                        <div className='step-7'>
                            <i class="fas fa-2x fa-home"></i>
                        </div>
                    </Link>
                    <Link to="/how-to-play">
                        <div className='step-8'>
                            <i class="fas fa-2x fa-question"></i>
                        </div>
                    </Link>
                </div>
            </div>
            <div style={{pointerEvents: `${gameStatus === 'game-over-lost' ? 'none' : 'inherit'}`}}>
                <div className='w3-col l8 m8 s12 w3-center'>
                    <Timer setTimeSpent={(time)=>setTimeSpent(time)} gameOver={gameStatus !== 'started'}/>
                    <div className='w3-hide-large w3-hide-medium'>
                        <MoveSelector option={option} setOption={(newOption) => setOption(newOption)} />
                    </div>
                    <MineField
                        option={option}
                        gameStatus={gameStatus}
                        setGameStatus={(status) => setGameStatus(status)}
                        resetMine={resetMine}
                        level={findLevel[level]}
                    />
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
                <MoveSelector option={option} setOption={(newOption) => setOption(newOption)} />
            </div>
        </div>
    )
}
