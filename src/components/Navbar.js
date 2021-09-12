import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";

export default function Navbar() {
    const [navbarExpanded, setNavbarExpanded] = useState(false)
    return (
        <div className='navbar '>
            {
                !navbarExpanded ?
                    <div className='collapsed'>
                        <i className="fas fa-bars fa-2x" onClick={() => setNavbarExpanded(true)}></i>
                    </div> :
                    <div className='expanded'>
                        <i className="fas fa-times fa-2x" onClick={() => setNavbarExpanded(false)}></i>
                        <div>
                            <Link to="/">
                                <div className='secondary-font w3-xxlarge'>
                                    Home
                                </div>
                            </Link>
                            <Link to="/how-to-play">
                                <div className='secondary-font w3-xxlarge'>
                                    How to Play
                                </div>
                            </Link>
                        </div>
                    </div>
            }

        </div>
    )
}
