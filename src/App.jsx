import './components/styles/App.css';
import Numpad from './components/Numpad/Numpad';
import React from 'react';
import AppInput from './components/Content/AppInput/AppInput';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Redirect, Route } from 'react-router-dom';
import BanknoteVars from './components/BanknoteVars/BanknoteVars';
import Note from './components/Note/Note';


const App = (state) => {
    /*const input = document.querySelector(".number")
    input.addEventListener('onkeyup', () => {
        this.value = this.value.replace(/[^0-9\\,]/g, '');
    })*/
    return (
        <div className="App-wrapper">
            <Header/>
            <div className="App-content">
                <Redirect exact from="/" to="/app-input"/>
                <Route path="/app-input" render={()=><AppInput/>}/>
                <Route path="/vars" render={()=><BanknoteVars/>}/>
                <Route path="/note" render={()=><Note/>}/>
                <Numpad/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;

