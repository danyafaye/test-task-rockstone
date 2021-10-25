import "./Note.css"
import React from 'react';
import NoteItem from './NoteItem';
import { useSelector } from 'react-redux';

//добавить форму позже

let Note = (props) => {
    let state = useSelector(state => state.varsR.var1)
    let stateElements = state.map(v => <NoteItem nvname={v.nv} qname={v.q}/>)
    return (
        <p className="note-text">{stateElements}</p>
    )
}

export default Note;