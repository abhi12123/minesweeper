import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectDiff() {
    return (
        <div className='select-diff'>
            <div className='w3-hide-medium w3-hide-large'>
                <Link to="/">
                    <i class="fas fa-chevron-left"></i>
                </Link>
            </div>
            <div>
                <p className='w3-xxlarge'>
                <Link to="/">
                    <i class="fas fa-chevron-left w3-hide-small"></i>
                </Link>Choose Difficulty</p>
            </div>
            <div>
                <div className='hover-zoom w3-padding'>
                    <Link to="/game-page/5X5">
                        <p className='w3-xlarge'>Beginner</p>
                        <p className='w3-large'>5X5</p>
                    </Link>
                </div>
                <div className='hover-zoom w3-padding'>
                    <Link to="/game-page/7X7">
                        <p className='w3-xlarge'>Intermediate</p>
                        <p className='w3-large'>7X7</p>
                    </Link>
                </div>
                <div className='hover-zoom w3-padding'>
                    <Link to="/game-page/9X9">
                        <p className='w3-xlarge'>Expert</p>
                        <p className='w3-large'>9X9</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
