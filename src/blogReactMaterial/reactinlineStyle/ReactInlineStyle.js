import React from "react";

const ReactInlineStyle = () => {
    const stylesObj = {
        backgroundColor: "lime",
        color: "white"
    }
    const elementWidth = 150;
    const arr = [{
        name: "ruban"
    }]
    console.log(arr.length)
    return (
        <>
            <div div style={{ backgroundColor: 'salmon', color: 'white' }
            }>
                {/* 👇️ set inline styles directly */}
                Some content
            </div >
            {/* 👇️ set inline styles using an object variable */}
            <div style={stylesObj}>
                Some content
            </div>
            <div style={{ backgroundColor: 'hi'.length === 2 ? "violet" : "mediumblue", color: 'hi'.length === 2 ? 'white' : 'mediumpurple', }}>
                Some content
            </div>
            <div style={{
                width: `${elementWidth}px`, backgroundColor: 'salmon',
                color: 'white',
            }}>        Some content


            </div>

        </>

    )
};

export default ReactInlineStyle;
