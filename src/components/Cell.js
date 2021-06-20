import React, { useState } from 'react';

export default function Cell({boxContent,handleClick,xPos,yPos}) {
    const {minesNearby, mineExist, stepped, flagged} = boxContent;
    const cellStyle = () => {
        let style = ''
        if(stepped){
            style = style.concat(' w3-white')
        }else{
            style = style.concat(' w3-black')
        }
        if(flagged){
            style = style.concat(' far fa-flag fa-5x')
        }
        if(mineExist && stepped){
            style = style.concat(' fas fa-bomb fa-5x')
        }
        return style
    }
    return(
        <div 
            className={`
                cell w3-button w3-border w3-ripple ${cellStyle()}
            `}
            onClick={()=>{handleClick()}}
        >
            {minesNearby == 0 || !stepped || mineExist ? null : 
            <span className='w3-xxxlarge'>
                {minesNearby}
            </span>}
        </div>
    )
}