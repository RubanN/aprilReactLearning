import React from "react";

const ReactZindex = () => {
    return (
        <div>
            <div
                style={{
                    position: 'relative',
                    zIndex: '3',
                    backgroundColor: 'salmon',
                    padding: '2rem',
                }}
            >
                Hello world
            </div>
        </div>
    )
};

export default ReactZindex;
