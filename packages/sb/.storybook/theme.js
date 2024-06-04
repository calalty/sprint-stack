import logo from './sprint-stack.svg';
import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Sprint Stack',
  brandImage: logo,
  colorSecondary: '#1E88E5',
  appBg: '#F0F4F8',
  appContentBg: '#FFFFFF',
  appBorderColor: '#D1E3F0',
  appBorderRadius: 8,
  textColor: '#2D3A45',
  textInverseColor: '#FFFFFF',
  barTextColor: '#4A6572',
  barSelectedColor: '#1565C0',
  inputBg: '#FFFFFF',
  inputBorder: '#D1E3F0',
  inputTextColor: '#2D3A45'
});
