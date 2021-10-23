import './components/styles/App.css';
import Numpad from './components/Numpad/Numpad';
import React from 'react';
import AppInput from './components/Content/AppInput/AppInput';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <div className="App-content">
            <AppInput/>
            <Numpad/>
        </div>
    )
}

const App = () => {
    /*const input = document.querySelector(".number")
    input.addEventListener('onkeyup', () => {
        this.value = this.value.replace(/[^0-9\\,]/g, '');
    })*/
    return (
        <div className="App-wrapper">
            <Header/>
            <Route path="/vars" render={()=><Vars/>}/>
            <Route path="/note" render={()=><Note/>}/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App;

