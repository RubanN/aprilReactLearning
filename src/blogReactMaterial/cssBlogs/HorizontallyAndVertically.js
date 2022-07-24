import React from "react";

const HorizontallyAndVertically = () => {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    };
    return (
        <div style={styles}
        // style={{
        //     display: 'flex',
        //     justifyContent: "center",
        //     height: '100vh',
        //     alignItems: "center"
        // }}
        >
            <h2>Some content here</h2>

        </div>
    )
};

export default HorizontallyAndVertically;
