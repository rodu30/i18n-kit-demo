import React from 'react';
import ReactDOM from 'react-dom';
import I18n from 'i18n-kit';
import messages from './i18n';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// initialize i18n
const messageLocale = 'en-US';

// NOTE: alternatively get from user setting saved e.g. on the server
const locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  messageLocale;

const options = {
  message: {
    messageLocale: messageLocale,
    disableWarnings: true
  },
  currency: {
    currency: 'USD'
  }
};

const i18n = new I18n(messages, locale, options);

ReactDOM.render(<App i18n={i18n} />, document.getElementById('root'));
registerServiceWorker();
