import React, { useState } from 'react'
import "./todo.css"
const TodoListapp = () => {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const handleTodoAddList = (e, ind) => {
        setTask(e.target.value)
    }
    const addTaskList = () => {

        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            }
            setTaskList([...taskList, taskDetails])
        }
    }
    // console.log("taskList", taskList)
    const deleteTask = (e, id) => {

        e.preventDefault()
        setTaskList(taskList.filter((t) => t.id != id))
    }
    const taskCompleted = (e, id) => {
        e.preventDefault()
        //lets find index of element
        const element = taskList.findIndex((elem) => elem.id === id);
        console.log(element, "element")
        //copy array into new variable
        const newTaskList = [...taskList]
        console.log(newTaskList, "taskList")
        //edit our element
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true
        }
        setTaskList(newTaskList)
        console.log(newTaskList[element], "element ")


    }
    return (
        <div className="todo">
            <input type="text" name="text" id="text" placeholder="Add task here..." onChange={(e) => handleTodoAddList(e)} />
            <button className="add-btn" type="submit" onClick={addTaskList} >Add</button>
            <br />
            {taskList !== [] ? (
                <ul>
                    {taskList.map((t) => (
                        <li className={t.isCompleted ? "crossText" : "listitem"}>{t.value}
                            <button className="completed" onClick={(e) => taskCompleted(e, t.id)}> Completed</button>
                            <button className="delete" onClick={(e) => deleteTask(e, t.id)}> Deleted</button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default TodoListapp