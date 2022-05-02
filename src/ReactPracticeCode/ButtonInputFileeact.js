import React, { useState, useRef } from 'react';

const ButtonInputFileeact = () => {
    const [file, setFile] = useState([]);
    const inputFile = useRef(null);
    const handleChange = e => {
        setFile([...file, e.target.value.files[0]])
    }
    return (
        <div>
            <button onClick={() => inputFile.current.click()}>
                <img src="https://www.svgrepo.com/show/12604/paper-clip.svg" />

            </button>
            <input
                type="text"
                onChange={handleChange}
                ref={inputFile}
            />
            <strong>Uploaded Files:</strong> {file.map(x => x.name).join(", ")}
        </div>
    )
}

export default ButtonInputFileeact