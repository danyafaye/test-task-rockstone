import React from 'react';
import "./Numpad.css"

const Numpad = () => {
    return (<div className="numpad">
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button><br/>
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button><br/>
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button><br/>
            <button value="x">-</button>
            <button value="0">0</button>
            <button value=",">,</button>
        </div>
    )
}

export default Numpad;