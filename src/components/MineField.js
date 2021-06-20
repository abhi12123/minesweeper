import React, { useState, useEffect } from 'react';
import Cell from './Cell';

export default function MineField({ option }) {
    const getRandomCombination = () => {
        return Math.floor(Math.random() * 7)
    }

    const getNeighbours = (x, y) => {
        const arr1 = [x - 1, x, x + 1];
        const arr2 = [y - 1, y, y + 1];
        let returnArray = []
        arr1.map((el1) => {
            arr2.map((el2) => {
                if ((el1 == x && el2 == y) || el1 < 0 || el2 < 0 || el1 > 6 || el2 > 6) {
                } else {
                    returnArray.push([el1, el2])
                }
            })
        })
        return returnArray;
    }

    const insertElement = (value, array, x, y) => {
        let existingBox = array[x][y];
        if (value == 'mine') {
            return [
                ...array.slice(0, x),
                [...array[x].slice(0, y), { ...existingBox, mineExist: true }, ...array[x].slice(y + 1)],
                ...array.slice(x + 1)
            ]
        }
        if (value == 'mines-nearby') {
            let numOfMinesNearby = array[x][y].minesNearby;
            return [
                ...array.slice(0, x),
                [...array[x].slice(0, y), { ...existingBox, minesNearby: numOfMinesNearby + 1 }, ...array[x].slice(y + 1)],
                ...array.slice(x + 1)
            ]
        }
    }

    const boxObject = {
        minesNearby: 0,
        mineExist: false,
        stepped: false,
        flagged: false
    }

    const [mineFieldArray, setMineFieldArray] = useState(new Array(7).fill(new Array(7).fill(boxObject)));
    const [nullGroups, setNullGroups] = useState([]);

    let minePosArray = [];
    for (let i = 0; i < 5; i++) {
        const minePos = [getRandomCombination(), getRandomCombination()];
        minePosArray.push(minePos)
    }
    minePosArray = [...new Set(minePosArray)];
    let array = mineFieldArray;
    let mineNeighbourArray = [];

    useEffect(() => {
        minePosArray.map((minePos) => {
            array = insertElement('mine', array, ...minePos)
            setMineFieldArray(array);
            mineNeighbourArray.push(...getNeighbours(...minePos))
        })
        mineNeighbourArray.map((pos) => {
            array = insertElement('mines-nearby', array, ...pos);
            setMineFieldArray(array);
        })
    }, [])

    const handleClick = (x, y) => {
        option == 'step' && setMineFieldArray(stepOnBox(x, y))
        option == 'flag' && setMineFieldArray(flagBox(x, y))
    }

    const stepOnBox = (x, y) => {
        
        if (mineFieldArray[x][y].flagged && array[x][y].stepped == false) return array;
        let arrayToStep = [];
        arrayToStep.push([x, y])
        if (mineFieldArray[x][y].minesNearby == 0) {
            getNeighbours(x, y).map((pos) =>
                arrayToStep.push(pos)
            )
        }
        arrayToStep.map((pos) => {
            let existingBox = mineFieldArray[pos[0]][pos[1]];
            array = [
                ...array.slice(0, pos[0]),
                [...array[pos[0]].slice(0, pos[1]), { ...existingBox, stepped: true }, ...array[pos[0]].slice(pos[1] + 1)],
                ...array.slice(pos[0] + 1)
            ]
        })

        return array
    }

    const flagBox = (x, y) => {
        let existingBox = mineFieldArray[x][y];
        let flagStatus = mineFieldArray[x][y].flagged;
        if (mineFieldArray[x][y].stepped) return array
        return [
            ...array.slice(0, x),
            [...array[x].slice(0, y), { ...existingBox, flagged: !flagStatus }, ...array[x].slice(y + 1)],
            ...array.slice(x + 1)
        ]
    }

    return (
        <div>
            {
                mineFieldArray.map(
                    (mineFieldArrayRow, i) =>
                        <div>
                            {
                                mineFieldArrayRow.map((boxContent, j) =>
                                    <Cell boxContent={boxContent} xPos={i} yPos={j} handleClick={() => handleClick(i, j)} />)
                            }
                        </div>
                )
            }

        </div>
    )
}

