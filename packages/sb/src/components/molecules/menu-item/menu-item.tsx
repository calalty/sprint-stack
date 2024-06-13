import { useState, useRef } from 'react';
import { Icon } from '../../atoms/icon/icon';
import { TextLink } from '../../atoms/text-link/text-link';

export type MenuItems = {
  label: string;
  url: string;
};

export type MenuItemProps = {
  color: string;
  itemsBackgroundColor: string;
  items: MenuItems[];
};

export const MenuItem = ({ color, itemsBackgroundColor, items }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseLeave = (e: any) => {
    if (buttonRef.current && !buttonRef.current.contains(e.relatedTarget)) setIsOpen(false);
  };

  return (
    <div className='relative inline-block text-left'>
      <button
        ref={buttonRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
        type='button'
        className='inline-flex justify-center items-center w-full rounded-md border text-sm gap-2 py-6 px-4'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        Options
        <Icon
          additionalClassName={`shrink-0 transform origin-center transition duration-200 ease-out ${isOpen && '!rotate-180'}`}
          color={color}
          size='sm'
          name='ChevronDownIconSolid'
        />
      </button>

      <ul
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`origin-top absolute left-1/2 transform -translate-x-1/2 w-56 rounded-md transition-all duration-200 ease-out ${
          isOpen ? 'opacity-100 translate-y-1' : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex={-1}
      >
        {items.map(({ label, url }) => (
          <li key={label}>
            <TextLink
              label={label}
              color={color}
              backgroundColorChange={itemsBackgroundColor}
              url={url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
