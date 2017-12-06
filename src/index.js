import React from 'react';
import ReactDOM from 'react-dom';
import { I18nProvider } from 'i18n-kit';
import messages from './messages';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Set a default locale for the messages to be added
const messageLocale = 'en-US';

// Set a few options
const options = {
  message: {
    messageLocale: messageLocale
  },
  currency: {
    currency: 'USD'
  }
};

ReactDOM.render(
  <I18nProvider messages={messages} options={options}>
    <App />
  </I18nProvider>,
  document.getElementById('root')
);

registerServiceWorker();
