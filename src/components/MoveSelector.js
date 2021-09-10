import React from 'react';
import {
    Link
} from "react-router-dom";

export default function MoveSelector() {
    return (
        
            <div className='nav-icons move-selector'>
                <Link to="/">
                    <div>
                        <i class="fas fa-3x fa-walking"></i>
                    </div>
                </Link>
                <Link to="/">
                    <div>
                        <i class="fas fa-3x fa-flag"></i>
                    </div>
                </Link>
            </div>
    )
}
