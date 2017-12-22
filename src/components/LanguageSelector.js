import React from 'react';
import { I18nGetter } from 'i18n-kit';
import Button from './Button';

const LanguageSelector = props => (
  <I18nGetter>
    {i18n => (
      <div style={{ margin: '1rem' }}>
        <Button onClick={() => (i18n.locale = 'de-DE')} selected={i18n.locale === 'de-DE'}>
          DE
        </Button>
        <Button onClick={() => (i18n.locale = 'en-US')} selected={i18n.locale === 'en-US'}>
          EN
        </Button>
        <Button onClick={() => (i18n.locale = 'es-ES')} selected={i18n.locale === 'es-ES'}>
          ES
        </Button>
        <Button
          onClick={() => (i18n.locale = null)}
          selected={i18n.locale === navigator.languages[0]}>
          Browser Default: {navigator.languages[0]}
        </Button>
      </div>
    )}
  </I18nGetter>
);

export default LanguageSelector;
