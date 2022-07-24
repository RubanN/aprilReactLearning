import React from "react";

const ConditionInsideMap = () => {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            {arr.map((element, index) => {
                if (element % 2 === 0) {
                    return <h2 key={index}>{element}</h2>
                }
                return undefined;

            })}
        </div>
    )
};

export default ConditionInsideMap;
