import React from 'react';

export default function Cell({ boxContent, handleClick }) {
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
            style = style.concat(' bomb-img')
        }
        if (flagged) {
            style = style.concat(' flag-img')
        }
        return style
    }
    return (
        <div
            className={`
                cell w3-button w3-border w3-ripple ${cellStyle()}
            `}
            onClick={() => { handleClick() }}
            style={stepped ? { pointerEvents: 'none' } : null}
        >
            <span className={`cell-content ${cellContentStyle()}`}>
                {minesNearby === 0 || !stepped || mineExist ? null : minesNearby}
            </span>
        </div>
    )
}