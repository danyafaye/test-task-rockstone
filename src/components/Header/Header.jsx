import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <button className="App-nominalo" onClick={<NavLink to="/vars"/>}>Варианты набора купюр</button>
            <button className="App-note" onClick={<NavLink to="/note"/>}>Вызов справки</button>
        </header>
    )
}

export default Header

