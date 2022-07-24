import { useState } from 'react';

const UpdateArrayofObjects = () => {
    const initialState = [
        { id: 1, name: 'Alice', country: 'Austria' },
        { id: 2, name: 'Bob', country: 'Belgium' },
    ];
    const [employees, setEmployees] = useState(initialState);
    // ✅ Add an object to a state array
    const addObjectToArray = obj => {
        console.log(obj);
        setEmployees(current => [...current, obj])
    }
    // ✅ Update one or more objects in a state array
    const updateObjectInArray = () => {
        setEmployees(current => current.map(obj => {
            if (obj.id === 2) {
                return { ...obj, name: "Storke", country: "United States" }
            }
            return obj
        }))
    }
    const removeObjectFromArray = (i) => {
        setEmployees([])
    }
    return (
        <div>
            <button onClick={() => addObjectToArray({
                id: Math.floor(Math.random() * 10),
                name: "ruban", country: "india"
            })}>Add employee</button>
            <button onClick={updateObjectInArray}>Update object in array</button>
            <button onClick={(e, i) => removeObjectFromArray(i)}>Remove object from array</button>

            {employees.map(employee => {
                return (
                    <div key={employee.id}>
                        <h2>name: {employee.name}</h2>
                        <h2>country: {employee.country}</h2>

                        <hr />
                    </div>
                )
            })}
        </div>
    )
};

export default UpdateArrayofObjects;
