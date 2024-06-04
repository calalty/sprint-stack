import '../src/styles/globals.css';
import { Bricolage_Grotesque } from 'next/font/google';

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin']
});

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
  },
  decorators: [
    Story => (
      <main className={BricolageGrotesque.className}>
        <Story />
      </main>
    )
  ]
};

export default preview;
