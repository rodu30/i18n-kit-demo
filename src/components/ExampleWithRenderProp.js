import React, { Component } from 'react';
import { I18nGetter } from 'i18n-kit';
import Button from './Button';

class ExampleWithRenderProp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: 0,
      order: 1,
      gender: 'female'
    };
  }

  render() {
    const { examples, order, gender } = this.state;

    return (
      <I18nGetter>
        {i18n => (
          <div>
            <h2>{i18n.m('Examples with render prop')}</h2>
            <p>{i18n.c(100)}</p>
            <p>{i18n.m('This is an example for a missing translation.')}</p>
            <div>
              {i18n.m(
                'This {examples, plural, =0{is no example} one{is an example} other{are examples} } for plurals and ordinals: {order, selectordinal, =1{#st} =2{#nd} =3{#rd} other{#th} } order.',
                {
                  examples,
                  order
                }
              )}
              <span style={{ marginLeft: '1rem' }}>
                <Button selected={examples === 0} onClick={() => this.setState({ examples: 0 })}>
                  0
                </Button>
                <Button selected={examples === 1} onClick={() => this.setState({ examples: 1 })}>
                  1
                </Button>
                <Button selected={examples === 5} onClick={() => this.setState({ examples: 5 })}>
                  > 1
                </Button>
              </span>
              <span style={{ marginLeft: '1rem' }}>
                <Button selected={order === 1} onClick={() => this.setState({ order: 1 })}>
                  1
                </Button>
                <Button selected={order === 2} onClick={() => this.setState({ order: 2 })}>
                  2
                </Button>
                <Button selected={order === 3} onClick={() => this.setState({ order: 3 })}>
                  3
                </Button>
                <Button selected={order === 5} onClick={() => this.setState({ order: 5 })}>
                  5
                </Button>
              </span>
            </div>
            <p>
              {i18n.m(
                'This is an example for gender selection: {gender, select, male{He likes} female{She likes} other{They like} } it.',
                {
                  gender
                }
              )}
              <span style={{ marginLeft: '1rem' }}>
                <Button
                  selected={gender === 'female'}
                  onClick={() => this.setState({ gender: 'female' })}>
                  {i18n.m('Female')}
                </Button>
                <Button
                  selected={gender === 'male'}
                  onClick={() => this.setState({ gender: 'male' })}>
                  {i18n.m('Male')}
                </Button>
                <Button
                  selected={gender === 'other'}
                  onClick={() => this.setState({ gender: 'other' })}>
                  {i18n.m('Other')}
                </Button>
              </span>
            </p>
          </div>
        )}
      </I18nGetter>
    );
  }
}

export default ExampleWithRenderProp;
