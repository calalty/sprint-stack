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

  links: [
    {
      label: 'Products',
      url: '#',
      children: (
        <p className='p-4 w-96'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo necessitatibus excepturi
          culpa deserunt veritatis reiciendis debitis enim, numquam ab corporis voluptatum nobis
          maiores ducimus quam quidem aspernatur minus et voluptatem.
        </p>
      )
    },
    {
      label: 'Resources',
      url: '#',
      children: (
        <p className='p-4 w-56'>
          numquam ab corporis voluptatum nobis maiores ducimus quam quidem aspernatur minus et
          voluptatem.
        </p>
      )
    },
    {
      label: 'Pricing',
      url: '#',
      children: (
        <p className='p-4 w-44'>
          Illo necessitatibus excepturi culpa deserunt veritatis reiciendis debitis enim, numquam ab
          corporis voluptatum nobis maiores ducimus quam quidem aspernatur minus et voluptatem.
        </p>
      )
    }
  ]
};

export const Default: Story = {
  args: defaultArgs
};
