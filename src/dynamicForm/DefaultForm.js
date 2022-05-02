import React, { useState } from 'react'

const DefaultForm = () => {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const handleChange = (e) => {
        setTask(e.target.value)
        console.log(e)
    }
    const addTodoList = () => {
        if (task !== "") {
            const newList = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            }
            setTaskList([...taskList, newList])
            setTask("")
        }
        console.log("taskList", taskList)
    }
    const handleDelete = (e, id) => {
        e.preventDefault()
        setTaskList(taskList.filter((x) => x.id !== x.id))
    }
    return (
        <div >
            <input onChange={handleChange} />
            <button onClick={addTodoList}>add</button>
            {taskList !== [] ? (
                <ul>
                    {taskList.map((t) => (
                        <li key={t.id}>{t.value}
                            <button onClick={handleDelete}>Delete</button>
                        </li>

                    ))}
                </ul>
            ) : null}
        </div>

    )
}

export default DefaultForm