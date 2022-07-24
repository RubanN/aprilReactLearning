import React from "react";


function Employee({ key, name, age, country, company }) {

    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{country}</h2>
        </div>
    )
}

const PassObjectProps = () => {
    const obj = { name: 'Alice', age: 29, country: 'Austria' };
    const obj2 = { tasks: ['dev', 'test'], salary: 100 };

    return (
        <div>
            <Employee {...obj} {...obj2} />

        </div>
    )
};

export default PassObjectProps;
