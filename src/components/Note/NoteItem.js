import React from 'react';

let NoteItem = (props) => {
    return (
        <div>
            <p>Купюра по {props.nvname}р. в количестве: {props.qname}</p>
        </div>
    )
}

export default NoteItem;