import React, { useState, useEffect } from 'react';
import Cell from './Cell';

export default function MineField({ option, gameStatus, setGameStatus, resetMine, level }) {
    const boxObject = {
        minesNearby: 0,
        mineExist: false,
        stepped: false,
        flagged: false
    }

    const selectedLevel = level=='tutorial'?7:level;

    const [mineFieldArray, setMineFieldArray] = useState(new Array(selectedLevel).fill(new Array(selectedLevel).fill(boxObject)));
    const [minePosArray, setMinePosArray] = useState([]);
    const [numOfStepped, setNumOfStepped] = useState(0);

    const getRandomCombination = () => {
        return Math.floor(Math.random() * selectedLevel)
    }

    const createMinePosArray = () => {
        let minePosArray = [];
        const numOfMines = Math.floor(selectedLevel * 75/100)
        for (let i = 0; i < numOfMines; i++) {
            const minePos = [getRandomCombination(), getRandomCombination()];
            minePosArray.push(minePos)
        }
        minePosArray = [...new Set(minePosArray)];
        return minePosArray;
    }

    const getNeighbours = (x, y) => {
        const arr1 = [x - 1, x, x + 1];
        const arr2 = [y - 1, y, y + 1];
        let returnArray = []
        arr1.map((el1) => {
            arr2.map((el2) => {
                if ((el1 === x && el2 === y) || el1 < 0 || el2 < 0 || el1 > selectedLevel-1 || el2 > selectedLevel-1) {
                } else {
                    returnArray.push([el1, el2])
                }
            })
        })
        return returnArray;
    }

    const insertElement = (value, array, x, y) => {
        let existingBox = array[x][y];
        if (value === 'mine') {
            return [
                ...array.slice(0, x),
                [...array[x].slice(0, y), { ...existingBox, mineExist: true }, ...array[x].slice(y + 1)],
                ...array.slice(x + 1)
            ]
        }
        if (value === 'mines-nearby') {
            let numOfMinesNearby = array[x][y].minesNearby;
            return [
                ...array.slice(0, x),
                [...array[x].slice(0, y), { ...existingBox, minesNearby: numOfMinesNearby + 1 }, ...array[x].slice(y + 1)],
                ...array.slice(x + 1)
            ]
        }
    }

    const handleClick = (x, y, e) => {
        option === 'step' && setMineFieldArray(stepOnBox(x, y))
        option === 'flag' && setMineFieldArray(flagBox(x, y))
    }

    const handleRightClick = (x,y,e) => {
        e.preventDefault()
        setMineFieldArray(flagBox(x, y))
    }

    const stepOnBox = (x, y) => {
        if (mineFieldArray[x][y].flagged || mineFieldArray[x][y].stepped === true) return mineFieldArray;
        if (mineFieldArray[x][y].mineExist) {
            setGameStatus('game-over-lost');
        }
        let arrayToStep = [];
        arrayToStep.push([x, y])
        if (mineFieldArray[x][y].minesNearby === 0) {
            getNeighbours(x, y).map((pos) =>
                arrayToStep.push(pos)
            )
        }
        let array = mineFieldArray;
        let n = numOfStepped;
        arrayToStep.map((pos) => {
            let existingBox = mineFieldArray[pos[0]][pos[1]];
            if (!existingBox.flagged && !existingBox.stepped) {
                array = [
                    ...array.slice(0, pos[0]),
                    [...array[pos[0]].slice(0, pos[1]), { ...existingBox, stepped: true }, ...array[pos[0]].slice(pos[1] + 1)],
                    ...array.slice(pos[0] + 1)
                ];
                n++
            }
        })
        setNumOfStepped(n);
        return array
    }

    const flagBox = (x, y) => {
        let existingBox = mineFieldArray[x][y];
        let flagStatus = mineFieldArray[x][y].flagged;
        if (mineFieldArray[x][y].stepped) return mineFieldArray
        return [
            ...mineFieldArray.slice(0, x),
            [...mineFieldArray[x].slice(0, y), { ...existingBox, flagged: !flagStatus }, ...mineFieldArray[x].slice(y + 1)],
            ...mineFieldArray.slice(x + 1)
        ]
    }

    const handleGameOver = () => {
        let array = mineFieldArray
        minePosArray.map((pos) => {
            let existingBox = mineFieldArray[pos[0]][pos[1]];
            array = [
                ...array.slice(0, pos[0]),
                [...array[pos[0]].slice(0, pos[1]), { ...existingBox, stepped: true, flagged: false }, ...array[pos[0]].slice(pos[1] + 1)],
                ...array.slice(pos[0] + 1)
            ]
        })
        setMineFieldArray(array);
    }

    useEffect(() => {
        let array = mineFieldArray;
        let neighbourArray = [];
        const minePosArray = createMinePosArray()
        minePosArray.map((minePos) => {
            array = insertElement('mine', array, ...minePos)
            neighbourArray.push(...getNeighbours(...minePos))
        })
        neighbourArray.map((pos) => {
            array = insertElement('mines-nearby', array, ...pos);
        })
        setMineFieldArray(array);
        setMinePosArray(minePosArray)
    }, [])

    useEffect(() => {
        if (gameStatus == 'game-over-lost') {
            handleGameOver()
        }
        if (numOfStepped == (selectedLevel*selectedLevel - minePosArray.length)) {
            setGameStatus('game-over-won')
            handleGameOver()
        }
    }, [gameStatus, numOfStepped])

    useEffect(() => {
        let array = new Array(selectedLevel).fill(new Array(selectedLevel).fill(boxObject));
        let neighbourArray = [];
        const minePosArray = createMinePosArray()
        minePosArray.map((minePos) => {
            array = insertElement('mine', array, ...minePos)
            neighbourArray.push(...getNeighbours(...minePos))
        })
        neighbourArray.map((pos) => {
            array = insertElement('mines-nearby', array, ...pos);
        })
        setMineFieldArray(array);
        setMinePosArray(minePosArray);
        setGameStatus('started');
        setNumOfStepped(0)
    }, [resetMine])

    return (
        <div className='mine-field'>
            {
                mineFieldArray.map(
                    (mineFieldArrayRow, i) =>
                        <div>
                            {
                                mineFieldArrayRow.map((boxContent, j) =>
                                    <Cell boxContent={boxContent} xPos={i} yPos={j} handleClick={(e) => handleClick(i, j, e)} 
                                    handleRightClick ={(e) => handleRightClick(i,j,e) } />)
                            }
                        </div>
                )
            }

        </div>
    )
}

