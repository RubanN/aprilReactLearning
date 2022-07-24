import React, { useState } from "react";

const FilterArrayofObjects = () => {
    const [employees, setEmployees] = useState(
        [
            { id: 1, name: 'Alice', country: 'Canada' },
            { id: 2, name: 'Bob', country: 'Belgium' },
            { id: 3, name: 'Carl', country: 'Canada' },
            { id: 4, name: 'Dean', country: 'Germany' },
        ]
    )
    // 👇️ filter with 1 condition
    const filtered = () => {
        let valuesFilter = employees.filter(emp => {
            return emp.country === "Germany"
        })
        setEmployees(valuesFilter)
    }
    return (
        <div>
            {employees.map(employee => {
                return (
                    <div key={employee.id}>
                        <h2>name: {employee.name}</h2>
                        <h2>country: {employee.country}</h2>
                        <button onClick={filtered}>Filter</button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
};

export default FilterArrayofObjects;
