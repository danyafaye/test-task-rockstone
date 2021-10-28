import "./Note.css"
import React from 'react';
import NoteItem from './NoteItem';
import { useSelector } from 'react-redux';

let Note = (props) => {
    let state = useSelector(state => state.varsR.var)
    return (
        <p className="note-text">{<NoteItem nvname={Object.keys(state).map(Number).reverse()} qname={Object.values(state).map(Number).reverse()}/>}</p>
    )
}

export default Note;