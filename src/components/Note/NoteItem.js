import React from 'react';

let NoteItem = (props) => {
    return (
        <div>
            <p>Купюра номиналом в {props.nvname}р. в количестве: {props.qname}</p>
        </div>
    )
}

export default NoteItem;