import { useState, useCallback } from "react";
import Todos from './Todos'
const FirstCallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount((c) => c + 1);
    }
    const addTodoList = useCallback(() => {
        setTodos((c) => [...c, "New ToDolist"])
    }, [todos])
    return (
        <div>
            <Todos todos={todos} addTodo={addTodoList} />
            <div>
                Count:{count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default FirstCallBack