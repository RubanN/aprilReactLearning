import React, { useReducer } from 'react'


const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "COMPLETE":
//             return state.map((todo) => {
//                 if (todo.id === action.id) {
//                     return { ...todo, complete: !todo.complete }
//                 } else {
//                     return todo;
//                 }
//             })
//         default:
//             return state

//     }
// }
export const UseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete = (todo) => {
        dispatch({ type: 'complete', id: todo.id })
    }
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}

        </div>
    )
}

const initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            count:{state.count}
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    )
}