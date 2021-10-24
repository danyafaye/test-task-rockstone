import './components/styles/App.css';
import Numpad from './components/Numpad/Numpad';
import React from 'react';
import AppInput from './components/Content/AppInput/AppInput';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Link, Route } from 'react-router-dom';
import AppOutput from './components/Content/AppOutput/AppOutput';
import BanknoteVars from './components/BanknoteVars/BanknoteVars';
import Note from './components/Note/Note';
import NoteContainer from './components/Note/NoteContainer';


const App = (state) => {

    /*const input = document.querySelector(".number")
    input.addEventListener('onkeyup', () => {
        this.value = this.value.replace(/[^0-9\\,]/g, '');
    })*/
    return (
        <div className="App-wrapper">
            <Header/>
            <div className="App-content">
                {/*<Route path="/vars" render={()=><Vars/>}/>
            <Route path="/note" render={()=><Note/>}/>*/}
                <NoteContainer/>
                <AppInput/>
                <Link to="/output"/>
                <Route path="/output" render={()=><AppOutput/>}/>
                <Route path="/vars" render={()=><BanknoteVars/>}/>
                <Route path="/note" render={()=><Note />}/>
                <Numpad/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;

