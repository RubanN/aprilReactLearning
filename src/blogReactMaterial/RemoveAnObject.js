import { useState } from 'react';

const RemoveAnObject = () => {
    const initialState = [
        { id: 1, name: 'Alice', country: 'Austria' },
        { id: 2, name: 'Bob', country: 'Belgium' },
        { id: 2, name: 'ruban', country: 'norway' },
    ];
    const [employees, setEmployees] = useState(initialState);
    const handleRemove = () => {
        setEmployees(current =>
            current.filter(employe => {
                // 👇️ remove object that has id equal to 2
                return employe.id !== 1
            })
        )
    }
    return (
        <div>
            <button onClick={handleRemove}>Remove second</button>
            {employees.map(({ id, name, country }) => {
                return (
                    <div key={id}>
                        <h2>name:{name}</h2>
                        <h2>country: {country}</h2>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
};

export default RemoveAnObject;
