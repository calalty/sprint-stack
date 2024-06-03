import '../src/styles/globals.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ['Foundation', 'Atoms', 'Molecules', 'Organisms']
      }
    }
  }
};

export default preview;
