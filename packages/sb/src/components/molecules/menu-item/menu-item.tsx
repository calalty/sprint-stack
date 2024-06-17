/* eslint-disable react/display-name */
import { useState, useRef, useEffect, forwardRef, HTMLAttributes } from 'react';
import { TextLink } from '../../atoms/text-link/text-link';
import { Icon } from '../../atoms/icon/icon';

export type Links = {
  label: string;
  url: string;
  children: any;
};

export type MenuItemProps = {
  color: string;
  links: Links[];
  showIcon?: boolean;
};
interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: any;
  index: number | null;
  hovering: number | null;
  setHovering: (value: number | null) => void;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, index, hovering, setHovering }, ref) => {
    return (
      <section
        onMouseEnter={() => setHovering(index)}
        className={`absolute transition-opacity duration-300
        ${hovering === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export const MenuItem = ({ color, showIcon, links }: MenuItemProps) => {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number>();
  const [textLinkWidth, setTextLinkWidth] = useState<number>(0);
  const [popoverHeight, setPopoverHeight] = useState<number>(0);
  const [popoverWidth, setPopoverWidth] = useState<number>(0);
  const [hoverCount, setHoverCount] = useState<number>(0);

  const refs = useRef<(HTMLElement | null)[]>([]);
  const navRef = useRef<HTMLElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const textLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleOnEnter = (index: number, el: HTMLElement) => {
    setPopoverLeft(el.offsetLeft);

    const menuElement = refs.current[index];
    const textLink = textLinkRefs.current[index];

    if (menuElement) {
      setPopoverWidth(menuElement.offsetWidth);
      setPopoverHeight(menuElement.offsetHeight);
    }
    if (textLink) {
      setTextLinkWidth(textLink.offsetWidth);
    }

    setHovering(index);
    setHoverCount(prevCount => prevCount + 1);
  };

  const handleMouseLeave = () => {
    setHovering(null);
    setHoverCount(0);
    setPopoverHeight(0);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (
        navRef.current &&
        popoverRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        handleMouseLeave();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  console.log({ textLinkWidth });
  return (
    <nav
      ref={navRef}
      className='items-start self-center flex w-fit max-w-full justify-between gap-10 my-auto max-md:flex-wrap max-md:justify-center ml-64'
    >
      {links.map(({ label }, index) => (
        <div className='flex gap-2' key={label}>
          <TextLink
            onFocus={event => handleOnEnter(index, event.currentTarget)}
            onMouseEnter={event => handleOnEnter(index, event.currentTarget)}
            url=''
            color={color}
            label={label}
            ref={el => (textLinkRefs.current[index] = el)}
          />

          {showIcon && (
            <Icon
              additionalClassName={`shrink-0 transform origin-center transition duration-200 ease-out ${hovering === index && '!rotate-180'} `}
              color={color}
              size='xl'
              name='ChevronDownIconSolid'
            />
          )}
        </div>
      ))}

      <div
        ref={popoverRef}
        style={{
          borderColor: color,
          left: popoverLeft,
          width: popoverWidth,
          height: popoverHeight
        }}
        className={`absolute ${hoverCount === 1 ? 'transition-opacity' : 'transition-all'} duration-300 ease-in-out shadow border-2 -ml-16 overflow-hidden rounded mt-8 ${hovering !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          style={{ backgroundColor: color, left: (textLinkWidth - 17) / 2 + 64 }}
          className={`-z-50 duration-300 overflow-visible absolute w-3 h-3 transform rotate-45 rounded-tl -[3px] shadow-[3px_3px_5px_rgba(82,95,127,0.04)] transition-all ${hovering !== null ? '-translate-y-2 opacity-100' : 'translate-y-0 opacity-0'}`}
        ></div>

        <div className='relative bg-white h-3'>
          {links.map(({ children }, index) => (
            <Menu
              key={index}
              hovering={hovering}
              index={index}
              setHovering={setHovering}
              ref={element => (refs.current[index] = element)}
            >
              {children}
            </Menu>
          ))}
        </div>
      </div>
    </nav>
  );
};
