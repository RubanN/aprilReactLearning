import React from "react";

const MapReferenceError = () => {
    const obj = {}
    // ⛔️ Uncaught TypeError: map is not a function
    const employee = {
        id: 1,
        name: 'Alice',
        salary: 100,
    };
    return (
        <div>
            {Array.isArray(obj) ? obj.map(element => {
                return <h2>{element}</h2>
            }) : null}
            {Object.keys(employee).map((key) => {
                return (
                    <div key={key}>
                        <h2>
                            {key}:{employee[key]}
                        </h2>
                    </div>
                )
            })}
            {Object.values(employee).map((value, index) => {
                return (
                    <div key={index}>
                        <h2>{value}</h2>
                    </div>
                )
            })}
        </div>
    )
};

export default MapReferenceError;
