// Load stencil webcomponents
import { defineCustomElements } from '../dist/esm/loader';
import { configureActions } from '@storybook/addon-actions';

defineCustomElements();

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: true,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
}

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});
