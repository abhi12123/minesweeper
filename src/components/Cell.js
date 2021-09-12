import React, { useEffect } from 'react';

export default function Cell({ boxContent, handleClick, handleRightClick, xPos, yPos }) {
    const { minesNearby, mineExist, stepped, flagged } = boxContent;
    const cellStyle = () => {
        let style = ''
        if (stepped) {
            style = style.concat(' stepped')
        } else {
            style = style.concat(' unstepped')
        }

        return style
    }
    const cellContentStyle = () => {
        let style = ''
        if (mineExist && stepped) {
            style = style.concat(' fas fa-bomb')
        }
        if (flagged) {
            style = style.concat(' fas fa-flag')
        }
        return style
    }
    return (
        <div
            className={`
                cell secondary-font ${cellStyle()}
            `}
            onClick={(e) => { handleClick(e) }}
            onContextMenu={(e) => handleRightClick(e)}
            style={stepped ? { pointerEvents: 'none' } : null}
        >
            <span className={`cell-content ${cellContentStyle()}`}>
                {minesNearby === 0 || !stepped || mineExist ? null : minesNearby}
            </span>
        </div>
    )
}