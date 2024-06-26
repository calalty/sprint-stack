import React from 'react';
import { Input, InputProps } from './input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<InputProps> = {
  title: 'Atoms/Input',
  component: Input,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj;

const defaultArgs: InputProps = {
  label: 'Save changes',
  type: 'standard',
  backgroundColor: '#F2F2F2',
  color: '#000000'
};

export const Standard: Story = {
  args: defaultArgs
};

export const Filled: Story = {
  args: {
    ...defaultArgs,
    type: 'filled'
  }
};

export const Outlined: Story = {
  args: {
    ...defaultArgs,
    type: 'outlined'
  }
};
