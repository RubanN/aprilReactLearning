import React, { useState } from 'react';
import Tab from './Tab'
const MainFunc = () => {
    const [showTab, setShowTab] = useState(true)
    // handle click event of the toggle button
    const handleToggle = () => {
        console.log("Parent Component render")
        setShowTab(prev => !prev)
    }
    return (
        <div>
            <div style={{ marginBottom: 10 }}><a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></div>
            {/* <input type="button" value="Toggle Tab" onClick={handleToggle} /> */}
            <input type="button" value={`${showTab ? "hide" : "show"}Tab`} onClick={handleToggle} />
            {Tab(showTab)}

        </div>
    )
}

export default MainFunc