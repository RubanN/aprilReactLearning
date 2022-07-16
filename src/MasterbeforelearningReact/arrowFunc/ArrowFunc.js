import React from 'react'

export const ArrowFunc = () => {
    const ruban = () => {
        return <h1>Hello Ruabn</h1>
    }
    console.log(ruban())
    const hello = () => {
        return <h1>Hello</h1>
    }
    hello()
    return (
        <div>ArrowFunc</div>
    )
}

