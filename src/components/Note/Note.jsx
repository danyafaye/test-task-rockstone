import "./Note.css"
import React from 'react';
import NoteItem from './NoteItem';

//добавить форму позже

let Note = (props) => {
    let state = props.varsR
    let stateElements = state.var1.map(v => <NoteItem nvname={v.nv} qname={v.q}/>)
    return (
        <div className="note-form">
        <p className="note-text">{stateElements}</p>
        </div>
    )
}

export default Note;