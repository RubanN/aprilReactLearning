import React from "react";

const MultipleFunctions = () => {
    const sum = (a, b) => {
        return a + b;
    };
    const multiply = (a, b) => {
        return a * b;
    };
    return (
        <button onClick={event => {
            console.log('function 1:', sum(5, 5));
            console.log('function 2:', multiply(5, 5));
        }}>CLick</button>
    )
};

export default MultipleFunctions;
