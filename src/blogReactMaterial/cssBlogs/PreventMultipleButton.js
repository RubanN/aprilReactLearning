import React, { useRef } from "react";

const PreventMultipleButton = () => {
    const buttonRef = useRef(null);
    // const handleClick = (event) => {
    //     alert("CLiked")
    //     event.currentTarget.disabled = true;
    // }
    const handleClick = (event) => {
        buttonRef.current.disabled = true;
        console.log('button clicked');
    }
    const handleReset = event => {
        buttonRef.current.disabled = false;
    }

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick}>Click</button>
            <hr />
            <button onClick={handleReset}>Reset</button>

        </div>
    )
};

export default PreventMultipleButton;
