import React, { useState } from "react";

const Square = () => {
    const [value, setValue] = useState('')
    const handleClink = () => {
        // console.log("Clinked!");'
        setValue(`x`)
        console.log(value);
    }
    return (
        <button
            className="square"
            onClick={handleClink}
        >
            {value}
        </button>
    )
}

export default Square;