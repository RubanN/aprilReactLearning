import { useState, useEffect } from 'react';
import "./note.css"
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const NoteApp = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: 'This is my first note!',
            date: '15/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my second note!',
            date: '21/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my third note!',
            date: '28/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my new note!',
            date: '30/04/2021',
        },
    ]);
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),

        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes)
    }
    return (
        <div className="container">
            <NotesList notes={notes} handleNodeList={addNote} />
            <Search />
            <Header />

        </div>
    )
}

export default NoteApp