import React from "react";

const FindReact = () => {
    const employees = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Carl' },
    ];
    const found = employees.find(element => {
        return element.id === 2
    })
    console.log(found);
    return (
        <div>
            <div>{found && <h2>{found.name}</h2>}</div>
        </div>
    )
};

export default FindReact;
