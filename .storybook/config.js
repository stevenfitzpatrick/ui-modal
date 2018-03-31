import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

console.log(' oookkkkkkkkkk');

function loadStories() {
  require('../packages/core/src/Modal/Modal.stories.js');
  // You can require as many stories as you need.
}

setOptions({
  name: 'Storybook',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: true,
  downPanelInRight: true,
  sortStoriesByKind: true
});

setAddon(infoAddon);

configure(loadStories, module);
