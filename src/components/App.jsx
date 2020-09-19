import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import NOTES from '../notes';
import InputNote from './InputNote';

export default function () {
    const [notes, setNote] = useState(NOTES);
    const onAdd = (e, note) => {
        if (notes.length < 1) {
            setNote([{
                key: 0,
                ...note
            }]);
        } else {
            setNote(prev => [...prev, {
                key: prev[prev.length - 1].key + 1,
                ...note
            }]);
        }
        e.preventDefault();
    }
    const onDelete = (e) => {
        const noteContent = e.target.previousSibling.innerHTML
        const indexToDelete = notes.map(note => note.content).indexOf(noteContent)
        let newState = notes.slice();
        newState.splice(indexToDelete, 1);
        setNote(newState);
    }

    return (
        <>
            <Header />
            <InputNote onClick={onAdd} />
            {notes.map((props) => <Note key={props.key} title={props.title} note={props.content} onClick={onDelete} />)}
            <Footer />
        </>
    )
}