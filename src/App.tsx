import React from 'react'
import logo from './logo.svg'
import './App.css'

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-tasks">
        <div>{`1. SCSS usage`}</div>
        <div>{`2. CSS modules usage`}</div>
        <div>{`3. Hot Module reload`}</div>
        <div>{`4. ?=> Redux <=?`}</div>
        <div>{`5. Configs cleanup`}</div>
        <div>{`6. Commenting configs`}</div>
      </div>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
)

export default App
