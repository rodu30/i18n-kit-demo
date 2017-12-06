import React from 'react';
import PropTypes from 'prop-types';
import { getI18n } from 'i18n-kit';

const ExampleWithHOC = ({ i18n }) => {
  return (
    <div>
      <h2>Examples with higher order component</h2>
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
        {i18n.m(`This is {num1} test for {num2}.`, {
          description: 'number',
          num1: 1,
          num2: 2
        })}
      </p>
      <p>
        {i18n.m('This is another test.', {
          description: 'foo'
        })}
      </p>
      <p>
        {i18n.m('This is another test.', {
          description: 'bar'
        })}
      </p>
    </div>
  );
};

ExampleWithHOC.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default getI18n(ExampleWithHOC);
