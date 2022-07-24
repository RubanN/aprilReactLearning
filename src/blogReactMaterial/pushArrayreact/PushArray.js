import { useState } from 'react';

const PushArray = (props) => {
    const [names, setNames] = useState(["Alice", "Bob"])
    const [newInput, setNewInput] = useState('')
    const initialState = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ];
    const [employees, setEmployees] = useState(initialState);

    const handleClick = () => {
        // 👇️ push to end of state array

        setNames((names => [...names, newInput]))
        console.log(names);
    }
    const handleObjet = () => {
        // 👇️ push object to end of state array
        setEmployees(current => [...current, { newInput }])
    }
    const handleRemove = (i) => {
        let deleteValue = names.splice(i, 1)
        setNames(deleteValue)
    }
    return (
        <div>
            <div>
                <input type="text" value={newInput} onChange={(e) => setNewInput(e.target.value)} />
                <button onClick={handleClick}>push to state array</button>
            </div>
            {names.map((element, index) => {
                return (
                    <>
                        <div key={index} style={{ display: "flex", flexDirection: "row" }}>
                            {element}
                        </div>
                        <button onClick={(e, i) => handleRemove(i)}>🐒</button>
                    </>

                )
            })}
            <button onClick={handleObjet}>Push object</button>
            {employees.map((employee, index) => {
                return (
                    <div key={index}>
                        <h2>{employee.name}</h2>

                    </div>
                )

            })}
        </div>
    )
};


export default PushArray;
