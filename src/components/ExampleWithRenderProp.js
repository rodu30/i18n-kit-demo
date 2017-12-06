import React from 'react';
import { I18nGetter } from 'i18n-kit';

const ExampleWithRenderProp = () => {
  return (
    <I18nGetter>
      {i18n => (
        <div>
          <h2>Examples with render prop</h2>
          <p>{i18n.c(100)}</p>
          <p>
            {i18n.m(
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
            )}
          </p>
        </div>
      )}
    </I18nGetter>
  );
};

export default ExampleWithRenderProp;
