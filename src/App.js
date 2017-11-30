import React, { Component } from 'react';
// import { formatNumber, formatDateTime, formatMessage } from 'i18n-kit';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocale: this.props.i18n.locale
    };
  }

  handleChangeToDE = () => {
    this.props.i18n.setLocale('de-DE');
    this.setState({ currentLocale: 'de-DE' });
  };

  handleChangeToEN = () => {
    this.props.i18n.setLocale('en-US');
    this.setState({ currentLocale: 'en-US' });
  };

  handleChangeToDefault = () => {
    this.props.i18n.setLocaleToDefault();
    this.setState({ currentLocale: 'default' });
  };

  render() {
    const { i18n } = this.props;
    // TODO: global festlegen
    const { currentLocale } = this.state;

    const number = i18n.formatNumber(3500);
    const money = i18n.formatNumber(29.99, { style: 'currency', currency: 'USD' });

    const now = i18n.formatDateTime(new Date(), {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    const nowWithTime = i18n.formatDateTime(new Date());
    const nowInPerth = i18n.formatDateTime(new Date(), {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Australia/Perth',
      timeZoneName: 'short'
    });

    // const fm = i18n.formatMessage;
    // const fm = (strings, ...rest) => console.log(strings, rest);

    const testText1 = i18n.formatMessage(
      i18n.translateMessage('This is {num1} test for {num2}.', { namespace: 'number' }),
      {
        num1: 1,
        num2: 2
      }
    );
    const testText2 = i18n.translateMessage('This is another test.', {
      messageLocale: 'en-US',
      disableWarnings: true,
      description: 'It has a description'
    });

    const duplicateOfTestText2 = i18n.translateMessage('This is another test.');

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
            background: i18n.locale === 'de-DE' && 'blue',
            color: i18n.locale === 'de-DE' && '#fff'
          }}
        >
          DE
        </button>
        <button
          onClick={this.handleChangeToEN}
          style={{
            background: i18n.locale === 'en-US' && 'blue',
            color: i18n.locale === 'en-US' && '#fff'
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
          Browser Default: {i18n.defaultLocale}
        </button>
        <h3>Numbers</h3>
        <p>{number}</p>
        <p>{money}</p>
        <h3>DateTime</h3>
        <p>{now}</p>
        <p>{nowWithTime}</p>
        <p>{nowInPerth}</p>
        <h3>Text</h3>
        <p>{testText1}</p>
        <p>{testText2}</p>
        {/* <p>{fm`${0}Text formatted ${1} with ${2} tagged template literal`}</p> */}
      </div>
    );
  }
}

export default App;
