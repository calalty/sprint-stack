import React from 'react';
import { Button, ButtonProps } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'Save changes',
    backgroundColor: '#0000ff'
  },
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Dynamic: Story = {
  args: {
    backgroundColor: 'red',
    color: 'white',
    label: 'Save change',
    primary: true,
    rounded: true,
    size: 'text-xs'
  }
};
