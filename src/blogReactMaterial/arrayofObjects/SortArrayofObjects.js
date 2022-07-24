import React, { useState } from "react";

const SortArrayofObjects = () => {
    const [employes, setEmployee] = useState([
        { id: 4, name: 'Dean', country: 'Denmark' },
        { id: 3, name: 'Carl', country: 'Canada' },
        { id: 2, name: 'Bob', country: 'Belgium' },
        { id: 1, name: 'Alice', country: 'Austria' },
        { id: 5, name: 'Ethan', country: 'Egypt' },
    ])
    // 👇️ sort by Numeric property ASCENDING (1 - 100)
    const numAscending = () => {
        let sortAscend = [...employes].sort((a, b) => a.id - b.id);
        setEmployee(sortAscend)
    }
    return (
        <div>
            <button onClick={numAscending}>AscendingOrder</button>
            {employes.map(emp => {
                return (
                    <div key={emp.id}>
                        <h2>id: {emp.id}</h2>
                        <h2>name: {emp.name}</h2>
                        <h2>country: {emp.country}</h2>

                        <hr />
                    </div>
                )
            })}

        </div>
    )
};

export default SortArrayofObjects;
