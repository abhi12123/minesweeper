import React from 'react'
import { useRoutes, A } from "hookrouter";

export default function HomePage() {
    return (
        <div className='homepage w3-center'>
            <div className=''><b>MINESWEEPER</b></div>
            <div><A href="/game-page" className='w3-button w3-ripple'>Play</A></div>
        </div>
    )
}
