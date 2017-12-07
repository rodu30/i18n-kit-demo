import React from 'react';
import { I18nGetter } from 'i18n-kit';

const LanguageSelector = props => (
  <I18nGetter>
    {i18n => (
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
    )}
  </I18nGetter>
);

export default LanguageSelector;
