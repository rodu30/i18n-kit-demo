import React, { Component } from 'react';
import ExampleWithRenderProp from './components/ExampleWithRenderProp';
import ExampleWithHOC from './components/ExampleWithHOC';
import LanguageSelector from './components/LanguageSelector';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to '18n-kit' React demo</h1>
        </header>
        <LanguageSelector />
        <ExampleWithHOC />
        <ExampleWithRenderProp />
      </div>
    );
  }
}

export default App;
