import './AppInput.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AppInput = () => {
    const [val, setVal] = useState("");
    const [valOut, setValOut] = useState(val);
    const [inputVal, setInputVal] = useState('');
    const handlerChange = (e) => {
        let replacedValue = e.target.value.replace(/[^0-9\,]/g, '');
        setInputVal(replacedValue)
        setVal(replacedValue)
    }
    const onKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "NumpadEnter") {
            e.preventDefault()
            e.stopPropagation()
            setValOut(val)
        }
    }
    const buttonClick = (e) => {
        let bttnVal = e.target.value
        setInputVal(inputVal + bttnVal)
        setVal(inputVal + bttnVal)
    }
    return (<div className="app-input-output-form">
            <input type="text" className="app-input" value={inputVal} onChange={handlerChange} onKeyDown={onKeyDown}/>
            <button className="app-input-to-output" onClick={() => setValOut(val)}>ВЫДАЧА</button>
            <div className="app-numpad">
                <div className="app-numpad-first-block">
                    <button value={1} onClick={buttonClick}>1</button>
                    <button value={2} onClick={buttonClick}>2</button>
                    <button value={3} onClick={buttonClick}>3</button>
                </div>
                <div className="app-numpad-second-block">
                    <button value={4} onClick={buttonClick}>4</button>
                    <button value={5} onClick={buttonClick}>5</button>
                    <button value={6} onClick={buttonClick}>6</button>
                </div>
                <div className="app-numpad-third-block">
                    <button value={7} onClick={buttonClick}>7</button>
                    <button value={8} onClick={buttonClick}>8</button>
                    <button value={9} onClick={buttonClick}>9</button>
                </div>
                <div className="app-numpad-last-block">
                    <button value={0} onClick={buttonClick}>0</button>
                    <button value={","} onClick={buttonClick}>,</button>
                </div>
            </div>
            <AppOutput valOut={valOut}/>
        </div>
    )
}

const AppOutput = (props) => {
    let state = useSelector(state => state.varsR.var)
    if (props.valOut === "") return null;
    let outputValue = props.valOut
    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    if (outputValue.includes(",")) {
        let index = outputValue.indexOf(",")
        let newValue = outputValue.slice(index + 1)
        return (
            <div className="app-output-form">
                <p className="output-sum">Введенная
                    сумма: {Math.trunc(outputValue.replaceAt(index, "."))} руб., {newValue} коп. </p>
                {console.log(outputAlgorithm(outputValue, state))}
            </div>
        )
    } else {
        return (
            <div className="app-output-form">
                <p className="output-sum">Введенная сумма: {outputValue} руб.</p>
                {console.log(outputAlgorithm(outputValue, state))}
            </div>
        )
    }
}

const outputAlgorithm = (num, vars) => {
    let collect = (amount, nominals) => {
        if(amount === 0) return {}
        if(!nominals.length) return;

        let currentNominal = nominals[0];
        let availableNotes = vars[currentNominal]
        let notesNeeded = Math.floor(amount/currentNominal);
        let numberOfNotes = Math.min(availableNotes, notesNeeded)

        for(let i = numberOfNotes; i>=0;i--){
            let result = collect(amount-i*currentNominal, nominals.slice(1));
            if (result){
                return i ? {[currentNominal]: i, ...result} : result;
            }
        }
    }
    let nomin = Object.keys(vars).map(Number).sort((a,b)=>b-a) //вместо сортировки надо чтобы вычислял номиналы где кол-во купюр больше всех(тоже можно сделать с помощью сортировки от большего к меньшему)

    return collect(num, nomin)
}

export default AppInput;

