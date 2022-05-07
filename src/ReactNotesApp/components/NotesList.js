import React from 'react'
import Note from "./Note"
import AddNote from './AddNote'
const NotesList = ({ notes, handleNodeList }) => {
    return (
        <div class="note-list">
            {notes.map((note) => (
                < Note id={note.id} text={note.text} date={note.date} />))}
            <AddNote handleNodeList={handleNodeList} />
        </div>
    )
}

export default NotesList