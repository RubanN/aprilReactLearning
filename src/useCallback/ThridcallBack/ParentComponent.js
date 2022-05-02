import React, { useState, useCallback } from 'react'
import MyList from './MyComponent';

const ParentComponent = () => {
    const [state, setState] = useState(false)
    const [dep] = useState(false)
    console.log("Parent Component redered");
    const handler = useCallback((event) => {
        console.log("You clicked ", event.currentTarget);

    }, [dep])
    const statehanddler = () => {
        setState(!state)
    }
    return (
        <div>
            <button onClick={statehanddler}>Change state of parent</button>
            <MyList handler={handler} />
        </div>
    )
}

export default ParentComponent