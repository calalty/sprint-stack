const preview = {
  parameters: {
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
