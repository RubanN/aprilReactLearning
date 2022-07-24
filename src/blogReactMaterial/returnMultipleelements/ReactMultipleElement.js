import React from "react";

const ReactMultipleElement = () => {
    const arr = ['First', 'Second'];
    return arr.map(element => {
        return (
            <React.Fragment key={element}>
                <div>{element}</div>
            </React.Fragment>
        )
    })

};

export default ReactMultipleElement;
