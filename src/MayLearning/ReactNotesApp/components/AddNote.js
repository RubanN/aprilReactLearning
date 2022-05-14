import React, { useState } from 'react'

const AddNote = ({ handleNodeList }) => {
    const [noteText, setNoteText] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value)
        setNoteText(event.target.value)
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleNodeList(noteText)
            setNoteText("")
        }
    }
    return (
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note"
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>200 Remaning</small>
                <button className="save" onClick={handleSaveClick}>save</button>
            </div>
        </div>
    )
}

export default AddNote