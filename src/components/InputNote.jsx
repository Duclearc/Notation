import React, { useState } from 'react';

export default function InputNote(props) {
    const emptyNote = {title:'', content:''}
    const [note, setNote] = useState(emptyNote);
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setNote(prev => ({...prev, [name]: value}));
    }
    return (
            <form onSubmit={(e) => {props.onClick(e, note); setNote(emptyNote)}}>
                <input name="title" placeholder="Title" onChange={changeHandler} value={note.title} />
                <textarea name="content" placeholder="Write your note here..." onChange={changeHandler} value={note.content} />
                <button type="submit">add</button>
            </form>
    )
}