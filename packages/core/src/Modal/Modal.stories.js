import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Modal from './Modal';

storiesOf('Modal', module)
  .addDecorator((story, context) => withInfo('test')(story)(context))
  .addDecorator(withKnobs)
  .add('A basic Modal', () => {
    return (
      <div className="m-8">
        <button>Open Dialog</button>
        <Modal>Some Content for the Modal</Modal>
      </div>
    );
  });
