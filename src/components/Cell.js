import React, { useState } from 'react';

export default function Cell({boxContent,handleClick,xPos,yPos}) {
    const {minesNearby, mineExist, stepped, flagged} = boxContent;
    return(
        <div 
            className={`
                cell w3-button w3-border w3-ripple 
                ${flagged?'w3-blue':stepped?'w3-white':'w3-black'}
            `}
            onClick={()=>{handleClick()}}
        >
            {stepped ? mineExist ? '*' : minesNearby == 0 ? null : minesNearby : null }
        </div>
    )
}