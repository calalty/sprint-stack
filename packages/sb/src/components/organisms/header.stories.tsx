import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './header';
import { mockLinks } from '../molecules/menu-item/menu-item.mock';

const meta: Meta<HeaderProps> = {
  title: 'Organisms/Header',
  component: Header,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj;

const defaultArgs: HeaderProps = {
  menuItemLinks: mockLinks,
  links: [
    { label: 'Contact', url: '' },
    { label: 'Sign in', url: '' }
  ],
  color: '#000000'
};

export const Default: Story = {
  args: defaultArgs
};
