import React, { useState, useEffect } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { FiCircle } from 'react-icons/fi';
import "./style.css"
const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoItem, setTodoItem] = useState('');
    const [error, setError] = useState(false)
    const [completedTasks, setCompletedTasks] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoItem) {
            setError(true)
            let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
            let newTodoItem = {
                id: uniqueId,
                todo: todoItem,
                complete: false,
            }
            setTodos([newTodoItem, ...todos])
            setTodoItem('')
        } else {
            setError(true);
            setTodoItem('');
        }
    }
    return (
        <div className="app-container">
            <div className="header-section">

            </div>
        </div>
    )
}

export default ToDoList