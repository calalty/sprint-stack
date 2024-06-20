import React from 'react';
import { TextLink, TextLinkProps } from './text-link';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TextLinkProps> = {
  title: 'Atoms/Text Link',
  component: TextLink,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj;

const defaultArgs: TextLinkProps = {
  label: 'Save changes',
  url: '',
  color: '#000000'
};

export const Default: Story = {
  args: defaultArgs
};

export const BackgroundColorChange: Story = {
  args: {
    ...defaultArgs,
    color: '#000000',
    backgroundColorChange: '#000000',
    colorChange: '#FFFFFF'
  }
};

export const ColorChange: Story = {
  args: { ...defaultArgs, colorChange: '#DDDDD' }
};

export const Centre: Story = {
  args: { ...defaultArgs, type: 'centre' }
};

export const LeftToRight: Story = {
  args: { ...defaultArgs, type: 'left-to-right' }
};

export const HighlightX: Story = {
  args: { ...defaultArgs, type: 'highlight-x' }
};

export const HighlightY: Story = {
  args: { ...defaultArgs, type: 'highlight-y' }
};
