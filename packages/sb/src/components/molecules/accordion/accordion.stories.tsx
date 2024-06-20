import React from 'react';
import { Accordion, AccordionProps } from './accordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<AccordionProps> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  args: {},
  parameters: {
    badges: ['stable']
  }
};

export default meta;

type Story = StoryObj<AccordionProps>;

const defaultArgs: AccordionProps = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corrupti suscipit fugiat
      quidem quas odit, cum deleniti dolor voluptate, aut velit illum deserunt ex labore soluta
      laborum praesentium porro repellendus!
    </p>
  ),
  title: 'What is Sprint Stack?',
  color: '#00000',
  type: 'plus'
};

export const Default: Story = {
  args: defaultArgs
};

export const Chevron: Story = {
  args: { ...defaultArgs, type: 'chevron' }
};

export const BorderTopBottom: Story = {
  args: { ...defaultArgs, border: 'top-bottom' }
};

export const BorderAll: Story = {
  args: { ...defaultArgs, border: 'all' }
};

export const Background: Story = {
  args: { ...defaultArgs, backgroundColor: '#F2F2F2' }
};

export const IconBackground: Story = {
  args: { ...defaultArgs, backgroundColor: '#F2F2F2', iconBackground: '#E0E0E0' }
};

export const Rounded: Story = {
  args: { ...defaultArgs, backgroundColor: '#F2F2F2', isRounded: true }
};
