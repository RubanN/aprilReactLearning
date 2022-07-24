import React from "react";

const DeepClone = () => {
    const obj = {
        person: {
            name: {
                first: 'James',
                last: 'Doe',
            },
            address: {
                country: 'Chile',
                city: 'Santiago',
            },
        },
    };
    const deepClone = JSON.parse(JSON.stringify(obj));
    console.log(deepClone);
    console.log(typeof JSON.stringify({ deepClone }));
    return (
        <div>
            <h2>Hello world</h2>

        </div>
    )
};

export default DeepClone;
