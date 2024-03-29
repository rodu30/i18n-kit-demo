import React from 'react';
import PropTypes from 'prop-types';
import { getI18n } from 'i18n-kit';

const ExampleWithHOC = ({ i18n }) => (
  <div>
    <h2>{i18n.m('Examples with higher order component')}</h2>
    <h3>Numbers</h3>
    <p>{i18n.n(3500)}</p>
    <p>{i18n.p(95)}</p>
    <p>{i18n.c(29.999)}</p>
    <h3>DateTime</h3>
    <p>{i18n.d(new Date())}</p>
    <p>
      {i18n.t(new Date(), {
        second: 'numeric'
      })}
    </p>
    <p>
      {i18n.t(new Date(), {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Australia/Perth',
        timeZoneName: 'short'
      })}
    </p>
    <h3>Text</h3>
    <p>
      {i18n.m(`This is {num1} example for {num2} variables.`, {
        description: 'number',
        num1: 1,
        num2: 2
      })}
    </p>
    <p>
      {i18n.m('This is an example for duplicated message.', {
        description: 'foo'
      })}
    </p>
    <p>
      {i18n.m('This is an example for duplicated message.', {
        description: 'bar'
      })}
    </p>
  </div>
);

ExampleWithHOC.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default getI18n(ExampleWithHOC);
