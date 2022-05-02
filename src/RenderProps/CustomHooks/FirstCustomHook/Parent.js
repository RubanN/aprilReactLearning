import React, { useState, useEffect } from 'react'
import useReact from './useReact'

const Parent = () => {
    const [useEffect, useState] = useReact()
    const [state, setState] = useState("Ruban")
    console.log(state)
    useEffect(() => {
        setState("money")
    }, [])
    return (
        <div>
            <h1>{state}</h1>
            <h1>Ruban</h1>
        </div>
    )
}

export default Parent