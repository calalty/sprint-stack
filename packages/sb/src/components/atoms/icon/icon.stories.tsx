import React from 'react';
import { Icon, IconTypes } from './icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IconTypes> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj<IconTypes>;

const defaultArgs: IconTypes = {
  color: '#00000',
  name: 'ArrowDownIconOutline',
  size: 'xl'
};

export const Default: Story = {
  args: defaultArgs
};
