import React from 'react';
import ReactDOM from 'react-dom';
import { I18n } from 'i18n-kit';
import messages from './i18n';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// initialize i18n
const messageLocale = 'en-US';

// NOTE: alternatively get from user setting saved e.g. on the server
const defaultLocale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  messageLocale;

const options = {
  dateTimeOptions: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long'
  }
};

const myI18n = new I18n(messages, defaultLocale, messageLocale, options);
// console.log(myI18n);

ReactDOM.render(<App myI18n={myI18n} />, document.getElementById('root'));
registerServiceWorker();
