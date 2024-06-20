import { Shortack } from '../atoms/icon/icons';
import { TextLink } from '../atoms/text-link/text-link';
import { MenuItem, MenuItemProps } from '../molecules/menu-item/menu-item';

export type HeaderProps = {
  menuItemLinks: MenuItemProps['links'];
  links: {
    label: string;
    url: string;
  }[];
  menuItemBackgroundColor: string;
  color: string;
};

export const Header = ({ menuItemLinks, color, links, menuItemBackgroundColor }: HeaderProps) => {
  return (
    <header className='flex justify-center p-6'>
      <div className='flex w-full items-center justify-between max-w-[1080px]'>
        <div className='flex items-center gap-12'>
          <Shortack width={175} />

          <MenuItem backgroundColor={menuItemBackgroundColor} links={menuItemLinks} color={color} />
        </div>
        <ul className='flex list-none m-0 p-0 gap-6'>
          {links.map(({ label, url }) => (
            <li key={label}>
              <TextLink color={color} label={label} url={url} type='left-to-right' />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
