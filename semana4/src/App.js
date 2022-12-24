
import React, { useState } from 'react';
import logo from './logo.svg';
import rejected from './img/rejected.jpg'
import approved from './img/approved.jpg'

import './App.css';

function App() {

  const [login, setLogin] = useState({hasLogin: false})
  const [count, setCount] = useState(0);

  function handleOnChangeEvent(evt) {
    const input = evt.target.value
    setCount(input.length);
  } 

  function handleOnClick(evt) {

    if(evt.target.name === "buttonNoLogin"){
      setLogin({hasLogin: true})
    }

    if(evt.target.name === "buttonHasLogin"){
      setLogin({hasLogin: false})
    }

  }

  return (
    <div className="App">
      
      <input style={{margin: "1rem"}} type="text" onChange={(e) => handleOnChangeEvent(e)} />
      <p>Este texto contem {count ? count : "0" } caracteres </p>



      <header className="App-header" >
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
    <div style={{margin: "8rem"}}>

    { login.hasLogin ?
        <div>
          <h1> Seja Bem vindo </h1>
          <img style={{height: 100, width: 100}} src={approved} alt="access" /> <br />
          <button name="buttonHasLogin" onClick={handleOnClick}>Logout</button>
        </div>
      :
        <div>
          <h1> Por favor Faca login </h1>
          <img style={{height: 100, width: 100}} src={rejected} alt="noAccess" /> <br />
          <button name="buttonNoLogin" onClick={handleOnClick}>Login</button>

        </div>
      }
    </div>


    </div>
  );
}

export default App;
