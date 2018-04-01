import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Modal from './Modal';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('A basic Modal', () => {
    return (
      <div className="m-8">
        <button>{(text('Button Content'), 'Toggle Button')}</button>
        <Modal onClose={action('closing2')} show={boolean('Toggle', false)}>
          {text('Modal Content', 'Some Default Content')}
        </Modal>
      </div>
    );
  });
