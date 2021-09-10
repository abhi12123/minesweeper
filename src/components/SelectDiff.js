import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectDiff() {
    return (
        <div className='select-diff'>
            <div>
                <i class="fas fa-chevron-left"></i>
                <p className='w3-xxxlarge'>Choose Difficulty</p>
            </div>
            <div>
                <div className='hover-stroke'>
                    <Link to="/game-page/5X5">
                        <p className='w3-xxlarge'>Beginner</p>
                        <p className='w3-xlarge'>5X5</p>
                    </Link>
                </div>
                <div className='hover-stroke'>
                    <Link to="/game-page/7X7">
                        <p className='w3-xxlarge'>Intermediate</p>
                        <p className='w3-xlarge'>7X7</p>
                    </Link>
                </div>
                <div className='hover-stroke'>
                    <Link to="/game-page/9X9">
                        <p className='w3-xxlarge'>Expert</p>
                        <p className='w3-xlarge'>9X9</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
