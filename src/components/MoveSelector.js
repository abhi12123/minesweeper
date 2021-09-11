import React from 'react';
import {
    Link
} from "react-router-dom";

export default function MoveSelector({option,setOption}) {
    return (
        
            <div className='nav-icons move-selector'>
                    <div className={`${option === 'step' ? 'selected' : 'unselected'}`}
                            onClick={() => setOption('step')}>
                        <i class="fas fa-2x fa-walking"></i>
                    </div>
                    <div className={`${option === 'flag' ? 'selected' : 'unselected'}`}
                            onClick={() => setOption('flag')}>
                        <i class="fas fa-2x fa-flag"></i>
                    </div>
            </div>
    )
}
