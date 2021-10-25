import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <NavLink to="/vars" className="app-nominalo">ВАРИАНТЫ НАБОРА КУПЮР</NavLink>
            <NavLink to="/note" className="app-note">ВЫЗОВ СПРАВКИ</NavLink>
            <NavLink to="/app-input" className="app-input-navi">ГЛАВНАЯ СТРАНИЦА</NavLink>
        </header>
    )
}

export default Header

