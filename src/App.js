import React, { Component } from 'react';
// import { formatNumber, formatDateTime, formatMessage } from 'i18n-kit';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocale: this.props.myI18n.locale
    };
  }

  handleChangeToDE = () => {
    this.props.myI18n.setLocale('de-DE');
    this.setState({ currentLocale: 'de-DE' });
  };

  handleChangeToEN = () => {
    this.props.myI18n.setLocale('en-US');
    this.setState({ currentLocale: 'en-US' });
  };

  handleChangeToDefault = () => {
    this.props.myI18n.setLocaleToDefault();
    this.setState({ currentLocale: 'default' });
  };

  render() {
    const { myI18n } = this.props;
    // TODO: global festlegen
    const { currentLocale } = this.state;

    const number = myI18n.formatNumber(3500);
    const money = myI18n.formatNumber(29.99, { style: 'currency', currency: 'USD' });

    const now = myI18n.formatDateTime(new Date(), {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    const nowWithTime = myI18n.formatDateTime(new Date());
    const nowInPerth = myI18n.formatDateTime(new Date(), {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Australia/Perth',
      timeZoneName: 'short'
    });

    // const fm = myI18n.formatMessage;
    // const fm = (strings, ...rest) => console.log(strings, rest);

    const testText = myI18n.formatMessage(
      myI18n.translateMessage('This is {num1} test for {num2}.'),
      {
        num1: 1,
        num2: 2
      }
    );
    const failingTestText = myI18n.translateMessage('This is another test.', {
      messageLocale: 'en-US'
      // disableWarnings: true
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
            background: myI18n.locale === 'de-DE' && 'blue',
            color: myI18n.locale === 'de-DE' && '#fff'
          }}
        >
          DE
        </button>
        <button
          onClick={this.handleChangeToEN}
          style={{
            background: myI18n.locale === 'en-US' && 'blue',
            color: myI18n.locale === 'en-US' && '#fff'
          }}
        >
          EN
        </button>
        <button
          onClick={this.handleChangeToDefault}
          style={{
            background: currentLocale === 'default' && 'blue',
            color: currentLocale === 'default' && '#fff'
          }}
        >
          Browser Default: {myI18n.defaultLocale}
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
        {/* <p>{fm`${0}Text formatted ${1} with ${2} tagged template literal`}</p> */}
      </div>
    );
  }
}

export default App;
