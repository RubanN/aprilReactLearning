import React, { useState } from 'react';

const IfElse = () => {
    const [counter, setCounter] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [input, setInput] = useState(counter)
    const handleEditClick = () => {
        setInput(input)
        setEditMode(false)
    }
    const handleUpdateClick = () => {
        setCounter(input)
        setEditMode(false)
    }
    if (editMode) {
        //Edit section
        return <div>
            <div>Counter: {counter}</div><br />
            <input type="number" value={input} onChange={e => setInput(e.target.value)} />
            <input type="button" value="Update" onClick={handleUpdateClick} />

        </div>
    } else {
        // Display section
        <div>
            <div>Counter: {counter}</div><br />
            <input type="button" value="Edit" onClick={handleEditClick} />

        </div>
    }

}

export default IfElse