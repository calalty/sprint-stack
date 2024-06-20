import React from 'react';
import { MenuItem, MenuItemProps } from './menu-item';
import type { Meta, StoryObj } from '@storybook/react';
import { mockLinks } from './menu-item.mock';

const meta: Meta = {
  title: 'Molecules/Menu Item',
  component: MenuItem,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj;

const defaultArgs: MenuItemProps = {
  color: 'black',
  links: mockLinks
};

export const Default: Story = {
  args: defaultArgs
};
