import './AppInput.css';
import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';

/*document.querySelector("input").addEventListener('keypress',
    function () {
        this.value = this.value.replace(/[^\d]/g, '');
    })*/

const AppInput = () => {
    const [val, setVal] = useState("");
    const [valOut, setValOut] = useState(val);
    const [inputText, setInputText] = useState('');
    const handlerChange = (e) => {
        let text = e.target.value.replace(/[^0-9\,]/g, '');
        setInputText(text)
         setVal(text)
    }
    const onKeyDown = (e) => {
        if(e.key === "Enter" || e.key === "NumpadEnter"){
            e.preventDefault()
            e.stopPropagation()
            setValOut(val)
        }
    }
    return (<div className="app-input-output-form">
            <input type="text" className="app-input" value={inputText} onChange={handlerChange} onKeyDown={onKeyDown}/>
            <button className="app-input-to-output" onClick={()=>setValOut(val)}>ВЫДАЧА</button>
            <AppOutput valOut={valOut} />
        </div>
    )
}

const AppOutput = (props) => {
    if(props.valOut==="")return null;
    return(
    <div className="app-output-form">
        <p className="output-sum">Введенная сумма:{props.valOut}</p>
    </div>
    )
}

export default AppInput;

