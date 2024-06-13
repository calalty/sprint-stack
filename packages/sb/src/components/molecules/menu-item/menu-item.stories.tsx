import React from 'react';
import { MenuItem, MenuItemProps } from './menu-item';
import type { Meta, StoryObj } from '@storybook/react';

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
  itemsBackgroundColor: 'blue',
  items: [{ label: 'Shop now', url: '#' }]
};

export const Default: Story = {
  args: defaultArgs
};
