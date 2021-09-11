import React from 'react'
import {
    Link
} from "react-router-dom";

export default function HomePage() {
    return (
        <div className='homepage w3-center'>
            <div className=''><b>MINESWEEPER</b></div>
            <div><Link to="/select-difficulty"><button className='hover-zoom'>Play</button></Link></div>
            <div><Link to="/how-to-play"><button className='hover-zoom'>How to Play</button></Link></div>
            <div className='icons'>
                <i class="fab fa-google-play fa-2x"></i>
                <i 
                    onClick={()=> window.open("https://github.com/abhi12123/minesweeper", "_blank")} 
                    className="hover-zoom cursor-pointer fab fa-github fa-2x"
                ></i>
            </div>
            <div className='w3-small secondary-font footer-text'>created by 
                <a className='secondary-font' href="https://www.linkedin.com/in/abhinavvp/" target="_blank"> Abhinav</a>
            </div>
        </div>
    )
}
