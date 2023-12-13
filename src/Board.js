import React from "react";
import Square from "./square";
// import { useState } from "react";

const Board = () => {
    // const [inputValue, setInputValue] = useState('');
    return (
        <div>
            {/* <input onChange={(e) => {
                setInputValue(e.target.value)
            }} ></input>
            <div>{inputValue}</div> */}
            <div className="div">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="div">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="div">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}

export default Board;