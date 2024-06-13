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
  color: '#1E88E5'
};

export const Default: Story = {
  args: defaultArgs
};

export const BackgroundColorChange: Story = {
  args: { ...defaultArgs, color: '#2d3a45', backgroundColorChange: '#1E88E5', colorChange: 'white' }
};

export const ColorChange: Story = {
  args: { ...defaultArgs, colorChange: '#2d3a45' }
};

export const Centre: Story = {
  args: { ...defaultArgs, type: 'centre' }
};

export const LeftToRight: Story = {
  args: { ...defaultArgs, type: 'left-to-right' }
};

export const Icon: Story = {
  args: {
    ...defaultArgs,
    iconName: 'ArrowRightIconSolid'
  }
};

export const HighlightX: Story = {
  args: { ...defaultArgs, type: 'highlight-x' }
};

export const HighlightY: Story = {
  args: { ...defaultArgs, type: 'highlight-y' }
};
