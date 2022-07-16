import React, { useState } from 'react'

const employee = {
    id: "ABC",
    name: "ruban",
    salary: "12000",
    address: {
        street: "1/221 anthoby street",
        country: "india",
        state: "tamilNadu",
        province: "chennai",
        streetAdress: {
            avenue: "elumalai street",
            platNo: "109"
        }
    }
}
const bioData = {
    name1: "ruban",
    age: 26,
    deg: "MCS"
}
const DestructuringObject = () => {
    const { name, id, salary, address: { street, country, state }, } = employee
    let { name1, age, deg } = bioData

    return (
        <div>
            <h4>{name}</h4>
            <p>{`This is my first adress ${street}`}</p>
            {/* <p>{`address is nearby${avenue}`}</p> */}
        </div>
    )
}

export default DestructuringObject