import Cell from "../components/Cell";
import MineField from "../components/MineField";
import MoveSelector from "../components/MoveSelector";
import Timer from "../components/Timer";
import MouseLottie from "../components/MouseLottie";

export const steps = [
    {
        image: <MineField
            option={null}
            gameStatus={null}
            setGameStatus={()=>{}}
            resetMine={null}
            level={7}
        />,
        content: 'The field is divided into a number of boxes. There could be mines under any of these boxes. You will have step on all the boxes in the field except for those with mines to win the game.',
    },
    {
        image: <MouseLottie />,
        content: 'Use left click to step on the box and right click to flag the box. ',
    },
    {
        image: <MoveSelector  option={'step'} setOption={() => {}}/>,
        content: 'Alternatively you can select step or flag option from the toggle.',
    },
    {
        image: <Cell 
            boxContent={{
                minesNearby: 2,
                mineExist: false,
                stepped: true,
                flagged: false
            }} 
            handleClick={() => {}}  
            handleRightClick ={() => {}} 
        />,
        content: 'Stepping over some safe boxes will reveal numbers on the field. This number denotes the number of mines in the Eight boxes adjacent to it. Use this as the leverage to deduce the position of mines.',
    },
    {
        image: <Timer/>,
        content: 'Timer displays the time that you have spent on this level',
    }
]