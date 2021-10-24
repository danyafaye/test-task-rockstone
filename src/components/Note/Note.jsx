import "./Note.css"
import React from 'react';
import NoteItem from './NoteItem';

let Note = (props) => {
    let state = props.varsR
    let stateElements = state.var1.map(v => <NoteItem nvname={v.nv} qname={v.q}/>)
    return (
        <div>{stateElements}</div>
    )
}

export default Note;