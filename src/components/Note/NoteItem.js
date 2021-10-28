import React from 'react';

let NoteItem = (props) => {
    return (
        <div>
            <p>Купюра номиналом в {props.nvname[0]}р. в количестве: {props.qname[0]}шт.</p>
            <p>Купюра номиналом в {props.nvname[1]}р. в количестве: {props.qname[1]}шт.</p>
            <p>Купюра номиналом в {props.nvname[2]}р. в количестве: {props.qname[2]}шт.</p>
            <p>Купюра номиналом в {props.nvname[3]}р. в количестве: {props.qname[3]}шт.</p>
            <p>Купюра номиналом в {props.nvname[4]}р. в количестве: {props.qname[4]}шт.</p>
            <p>Купюра номиналом в {props.nvname[5]}р. в количестве: {props.qname[5]}шт.</p>
            <p>Купюра номиналом в {props.nvname[6]}р. в количестве: {props.qname[6]}шт.</p>
        </div>
    )
}

export default NoteItem;