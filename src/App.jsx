import './components/styles/App.css';

const Header = () => {
    return(
        <header className="app-header">
            <button className="app-nominalo">Варианты набора купюр</button>
            <button className="app-note">Вызов справки</button>
        </header>
    )
}//вынести в отдельную компоненту с используемыми стилями

const App = () => {
    return(
        <div className="app-wrapper">
        <Header/>
        {/*<Content/>
         <Footer/>*/}
        </div>
    )
}

export default App;

/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/