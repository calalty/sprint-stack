import { create } from '@storybook/theming';
import shortStack from './sprint-stack.svg';

export default create({
  base: 'light',

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'My Custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: shortStack,
  brandTarget: '_self',

  colorPrimary: '#FFFFF',
  colorSecondary: '#000000',

  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#000000',
  appBorderRadius: 4,

  textColor: '#000000',
  textInverseColor: '#000000',

  barTextColor: '#000000',
  barSelectedColor: '#000000',
  barHoverColor: '#000000',
  barBg: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: '#FFFFF',
  inputTextColor: '#000000',
  inputBorderRadius: 2
});
