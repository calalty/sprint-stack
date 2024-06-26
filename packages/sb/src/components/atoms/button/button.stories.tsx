import React from 'react';
import { Button, ButtonProps } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj<ButtonProps>;

const defaultArgs: ButtonProps = {
  backgroundColor: '#000000',
  color: '#FFFFFF',
  label: 'Save change',
  primary: false,
  rounded: true,
  iconName: 'ArrowDownIconOutline',
  size: 'text-sm'
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    primary: true,
    size: 'text-sm'
  }
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    size: 'text-sm'
  }
};
