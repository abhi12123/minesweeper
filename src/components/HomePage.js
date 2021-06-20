import React from 'react'
import { useRoutes, A } from "hookrouter";

export default function HomePage() {
    return (
        <div className='w3-center'>
            <div className='w3-jumbo'>Welcome to Minesweeper</div>
            <A href="/game-page" className='w3-button w3-black w3-ripple w3-jumbo'>Lets play</A>
        </div>
    )
}
