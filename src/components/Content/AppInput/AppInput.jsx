import './AppInput.css';
import React from 'react';

/*document.querySelector("input").addEventListener('keypress',
    function () {
        this.value = this.value.replace(/[^\d]/g, '');
    })*/

const AppInput = () => {
    return (
        <input type="number" className="App-input"/>
    )
}

export default AppInput;

