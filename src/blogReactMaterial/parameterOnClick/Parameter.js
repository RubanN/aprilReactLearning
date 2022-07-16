import React from "react";

const Parameter = () => {
    const handleClick = (event, param) => {
        console.log(event);
        console.log("PAram", param);
    };
    return (
        <div>
            <button
                onClick={event => handleClick(event, "Hello world")}
            >Click</button>
        </div>
    )
};

export default Parameter;
