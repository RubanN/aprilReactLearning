import React from "react";

const FindRenderObject = () => {
    const arr = [
        { id: 1, country: 'Austria' },
        { id: 2, country: 'Germany' },
        { id: 3, country: 'Austria' },
    ];
    // ✅ Find first object that matches condition
    const found = arr.find(obj => {
        return obj.id === 1
    })

    console.log(found);
    const notFound = arr.find(obj => {
        return obj.id === 123
    })
    // ✅ Find multiple objects that satisfy condition
    const filtered = arr.filter(obj => {
        return obj.country === "Germany"
    })
    console.log(filtered);

    return (
        <div>
            {filtered.map(obj => {
                return (
                    <div key={obj.id}>
                        <h2>id: {obj.id}</h2>
                        <h2>country: {obj.country}</h2>
                    </div>
                )
            })}
        </div>
    )
};

export default FindRenderObject;
