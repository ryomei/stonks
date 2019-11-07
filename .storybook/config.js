import { configure } from '@storybook/angular';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/angular';

import '@storybook/addon-console';

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      xiaominote7: {
        name: 'Redmi Note 7',
        styles: {
          width: '393px',
          height: '851px',
          padding: '40px 30px 60px 30px'
        }
      }
    },
    defaultViewport: 'xiaominote7',
  },
});

addParameters({
  backgrounds: [
    { name: 'dark', value: '#101823;', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});

configure(require.context('../projects', true, /\.stories\.[tj]s$/), module);