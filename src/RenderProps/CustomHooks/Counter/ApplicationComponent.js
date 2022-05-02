import React, { useState, useEffect } from 'react'

function useCustomHooks(username, userDesignation) {
    let name = "User Name: " + username;
    let designation = "User Designation: " + userDesignation;
    return [name, designation]
}

function useCustomTimeHooks() {
    function getCurrentTime() {
        let date = new Date();
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }
    let [time, setTime] = useState(getCurrentTime())

    setTime(() => {
        setTime(getCurrentTime())
    }, 1000)
    return [time]
}

function useEmployeeCountHooks() {
    let [empCount, setEMpCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            // setEMpCount(employeeData.length)
        }, 2000)
    })
    return [empCount]
}

const ApplicationComponent = () => {
    const [name, designation] = useCustomHooks("ruban", "Trainer")
    // const [time] = useCustomTimeHooks()
    const [empCount] = useEmployeeCountHooks();

    return (
        <div>
            <h1>{name}</h1>
            <h2>{designation}</h2>

        </div >



    )
}

export default ApplicationComponent