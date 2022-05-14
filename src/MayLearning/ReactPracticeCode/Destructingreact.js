import React from 'react'

const Destructingreact = () => {
    let person = {
        name: "ruban",
        age: 15,
        job: "programmer"
    }
    const { name, age } = person

    const bioData = {
        name1: "nimrma",
        age1: 34,
        department: "Mechinacal"
    }
    let { name1, age1, department } = bioData
    // console.log(`my name is ${name1} my age is ${age1}`)

    let arr = [1, 2, 3, 4, 5];
    let a = 10
    let b = 20;
    [a, b] = [a, b]
    console.log(a)
    return (
        <div>{name}</div>
    )
}

export default Destructingreact