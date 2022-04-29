// import logo from './logo.svg';
import './App.css';
// import AxiosTest from './AxiosTest01';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation'

import Home from './routes/Home';
import Detail from './routes/Detail';
import Write from './routes/Write';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/write" component={Write} />
      
    </HashRouter>

    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <AxiosTest />
    // </div>
  );
}

export default App;
