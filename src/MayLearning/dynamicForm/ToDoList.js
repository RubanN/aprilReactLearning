import React, { useState } from 'react'

const ToDoList = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([])
    const handleInput = (e) => {
        e.preventDefault();
        console.log(e)
    }
    const addToDOList = () => {
        if (task !== "") {
            const newList = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false

            }
            const newListvalues = [...taskList, newList]
            setTaskList(newListvalues)
        }


    }
    return (
        <div>
            <input type="text" value={task} onChange={handleInput} />
            <button onClick={addToDOList}>Add</button>
        </div>
    )
}

export default ToDoList