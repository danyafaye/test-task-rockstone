import React from 'react';
import {connect} from "react-redux";
import Note from './Note';

const mapStateToProps = (state) => {
    return {
        varsR: state.varsR
    }
}

const NoteContainer = connect(mapStateToProps, "")(Note);

export default NoteContainer;
