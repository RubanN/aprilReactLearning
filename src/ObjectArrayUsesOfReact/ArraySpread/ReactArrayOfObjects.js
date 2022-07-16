import React, { useState } from 'react'

const ReactArrayOfObjects = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "take out trash",
            done: false
        },
        {
            id: 2,
            title: "wife to dinner",
            done: false
        },
        {
            id: 3,
            title: "make react app",
            done: false
        }
    ]);
    const toggleDone = (e, item) => {
        const indexTodUpdate = todos.findIndex((todo) => todo.id === item.id)
        const updatedTodos = [...todos]
        updatedTodos[indexTodUpdate].done = !item.done
        setTodos(updatedTodos)
    }

    return (
        <div>

        </div>
    )
}

export default ReactArrayOfObjects