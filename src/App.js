import React, { Component } from 'react';
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
    this.props.i18n.locale = 'de-DE';
    this.setState({ currentLocale: 'de-DE' });
  };

  handleChangeToEN = () => {
    this.props.i18n.locale = 'en-US';
    this.setState({ currentLocale: 'en-US' });
  };

  handleChangeToDefault = () => {
    this.props.i18n.locale = null;
    this.setState({ currentLocale: 'default' });
  };

  render() {
    const { i18n } = this.props;
    // TODO: global festlegen
    const { currentLocale } = this.state;

    const number = i18n.n(3500);
    const percent = i18n.p(95);
    const money = i18n.c(29.999);

    const nowTime = i18n.t(new Date(), {
      second: 'numeric'
    });
    const nowDate = i18n.d(new Date());
    const nowInPerth = i18n.t(new Date(), {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Australia/Perth',
      timeZoneName: 'short'
    });

    const testText1 = i18n.m(`This is {num1} test for {num2}.`, {
      description: 'number',
      num1: 1,
      num2: 2
    });

    const testText2 = i18n.m('This is another test.', {
      description: 'foo'
    });

    const duplicateOfTestText2 = i18n.m('This is another test.', {
      description: 'bar'
    });

    const testText3 = i18n.m('Hello!');

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
        <p>{percent}</p>
        <p>{money}</p>
        <h3>DateTime</h3>
        <p>{nowTime}</p>
        <p>{nowDate}</p>
        <p>{nowInPerth}</p>
        <h3>Text</h3>
        <p>{testText1}</p>
        <p>{testText2}</p>
        <p>{duplicateOfTestText2}</p>
        <p>{testText3}</p>
      </div>
    );
  }
}

export default App;
