import React, { Component } from 'react';
import { formatNumber, formatDateTime, formatMessage, generateKeyFromString } from 'i18n-kit';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en-US'
    };
  }

  handleChangeToDE = () => {
    this.setState({ locale: 'de-DE' });
  };

  handleChangeToEN = () => {
    this.setState({ locale: 'en-US' });
  };

  render() {
    // TODO: global festlegen
    const { locale } = this.state;

    const number = formatNumber(locale, 3500);
    const money = formatNumber(locale, 29.99, { style: 'currency', currency: 'USD' });

    const now = formatDateTime(locale, new Date());
    const nowInPerth = formatDateTime(locale, new Date(), {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Australia/Perth',
      timeZoneName: 'short'
    });
    const nowWithTime = formatDateTime(locale, new Date(), {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      weekday: 'long'
    });

    const defaultMessage = 'This is {num1} test for {num2}.';
    const messageKey = generateKeyFromString(defaultMessage);
    const messages = {
      'de-DE': { [messageKey]: 'Dies ist {num1} ein Test für {num2}.' },
      'en-US': { [messageKey]: 'This is {num1} test for {num2}.' }
    };
    const testText = formatMessage(locale, messages, 'This is {num1} test for {num2}.', {
      vars: {
        num1: 1,
        num2: 2
      }
    });
    const failingTestText = formatMessage(locale, messages, 'This is another test.', {
      defaultLocale: 'en-US'
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={this.handleChangeToDE}
          style={{
            background: locale === 'de-DE' && 'blue',
            color: locale === 'de-DE' && '#fff'
          }}
        >
          DE
        </button>
        <button
          onClick={this.handleChangeToEN}
          style={{
            background: locale === 'en-US' && 'blue',
            color: locale === 'en-US' && '#fff'
          }}
        >
          EN
        </button>
        <h3>Numbers</h3>
        <p>{number}</p>
        <p>{money}</p>
        <h3>DateTime</h3>
        <p>{now}</p>
        <p>{nowWithTime}</p>
        <p>{nowInPerth}</p>
        <h3>Text</h3>
        <p>{testText}</p>
        <p>{failingTestText}</p>
      </div>
    );
  }
}

export default App;
