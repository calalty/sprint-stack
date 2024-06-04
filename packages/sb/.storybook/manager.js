import React from 'react';

import PetsTheme from './theme';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: PetsTheme,
  sidebar: {
    renderLabel: item => {
      if (item.type !== 'story') {
        return item.name;
      }

      return (
        <span className='p-sidebar-label'>
          <span className='p-sidebar-badge' />
          {item.name}
        </span>
      );
    }
  }
});
