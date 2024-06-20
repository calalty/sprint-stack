'use client';
import { mockLinks } from 'packages/sb/src/components/molecules/menu-item/menu-item.mock';
import { Header } from '../../packages/sb/src/components/organisms/header';

export const AppHeader = () => {
  return (
    <Header
      menuItemBackgroundColor='#FFFFFF'
      color='#000000'
      links={[
        { label: 'Contact', url: '' },
        { label: 'Sign in', url: '' }
      ]}
      menuItemLinks={mockLinks}
    />
  );
};
