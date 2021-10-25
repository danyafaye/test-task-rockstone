import './Header.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
/*import { Link } from 'react-router-dom';*/

/*onClick={<Link to="/vars"/>}*/

const Header = () => {
    return (
        <header className="App-header">
            <NavLink to="/vars" className="app-nominalo">Варианты набора купюр</NavLink>
            <NavLink to="/note" className="app-note">Вызов справки</NavLink>
        </header>
    )
}

export default Header

