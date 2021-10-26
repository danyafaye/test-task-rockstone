import './AppInput.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

/*document.querySelector("input").addEventListener('keypress',
    function () {
        this.value = this.value.replace(/[^\d]/g, '');
    })*/

const AppInput = () => {
    return (<div className="app-input-form">
            <input type="number" className="App-input"/>
            <NavLink to="/output" className="app-input-to-output">ВЫДАЧА</NavLink>
        </div>
    )
}

export default AppInput;

