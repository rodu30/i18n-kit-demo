import React, { Component } from 'react';
import { getI18n } from 'i18n-kit';
import ExampleWithRenderProp from './components/ExampleWithRenderProp';
import ExampleWithHOC from './components/ExampleWithHOC';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { i18n } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ margin: '1rem' }}>
          <button
            onClick={() => (i18n.locale = 'de-DE')}
            style={{
              background: i18n.locale === 'de-DE' && 'blue',
              color: i18n.locale === 'de-DE' && '#fff'
            }}
          >
            DE
          </button>
          <button
            onClick={() => (i18n.locale = 'en-US')}
            style={{
              background: i18n.locale === 'en-US' && 'blue',
              color: i18n.locale === 'en-US' && '#fff'
            }}
          >
            EN
          </button>
          <button
            onClick={() => (i18n.locale = 'es-ES')}
            style={{
              background: i18n.locale === 'es-ES' && 'blue',
              color: i18n.locale === 'es-ES' && '#fff'
            }}
          >
            ES
          </button>
          <button
            onClick={() => (i18n.locale = null)}
            style={{
              background: i18n.locale === navigator.languages[0] && 'blue',
              color: i18n.locale === navigator.languages[0] && '#fff'
            }}
          >
            Browser Default: {navigator.languages[0]}
          </button>
        </div>
        <ExampleWithHOC />
        <ExampleWithRenderProp />
      </div>
    );
  }
}

export default getI18n(App);
