import { configure } from '@storybook/angular';

configure(require.context('../projects', true, /\.stories\.[tj]s$/), module);