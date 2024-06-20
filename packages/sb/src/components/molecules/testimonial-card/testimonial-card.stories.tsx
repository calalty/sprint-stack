import { Meta, StoryObj } from '@storybook/react/*';
import { TestimonialCardProps, TestimonialCard } from './testimonial-card';

const meta: Meta<TestimonialCardProps> = {
  title: 'Molecules/Testimonial Card',
  component: TestimonialCard,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj<TestimonialCardProps>;

const defaultArgs: TestimonialCardProps = {
  backgroundColor: '#F2F2F2',
  color: '#000000',
  name: 'John Doe',
  quote:
    "It's an amazing minimalist, lightweight boilerplate with well-organized code. It has almost all the core features you would want in a SaaS boilerplate. As a new team last year it actually took us months to build a similar set of features at a stable level.",
  role: 'Software Engineer',
  imageUrl: 'https://robohash.org/random12345678910',
  isReverse: false,
  isBlur: false,
  isBorder: true
};

export const Default: Story = {
  args: defaultArgs
};
