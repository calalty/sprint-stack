import Link from 'next/link';
import { useState } from 'react';
import { Icon, IconName, IconSize } from '../icon/icon';

export type TextLinkProps = {
  url: string;
  label: string;
  color: string;
  type?: 'left-to-right' | 'highlight-x' | 'centre' | 'highlight-y';
  backgroundColorChange?: string;
  colorChange?: string;
  target?: '_self' | '_blank';
  underlined?: boolean;
  outlined?: boolean;
  iconPosition?: 'left' | 'right';
  size?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
};

export const TextLink = ({
  url,
  color,
  target,
  underlined,
  label,
  type,
  colorChange,
  backgroundColorChange,
  outlined,
  iconPosition = 'right',
  size = 'text-md'
}: TextLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isHighlight = type === 'highlight-x';
  const isCentre = type === 'centre';

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={url}
      target={target}
      style={{
        backgroundColor: isHovered ? backgroundColorChange : 'transparent',
        color: isHighlight && isHovered ? 'white' : isHovered && colorChange ? colorChange : color,
        boxShadow: isHighlight ? `inset ${isHovered ? '300px' : '0'} 0 0 0 ${color}` : ''
      }}
      className={`${underlined && 'underline'} ${outlined && 'border'} ${backgroundColorChange && 'rounded-lg'} ${size} ${(backgroundColorChange || outlined) && 'px-2 py-1'} flex opacity-75 hover:opacity-100 duration-300 ease-in-out ${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-1 w-fit relative ${type === 'left-to-right' && "before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-current before:-bottom-[2px] before:left-0 before:origin-right before:scale-x-0 before:ease-in-out before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"} ${isHighlight && 'px-1 -mx-1 transition-all ease-in-out duration-300'} ${isCentre && "before:content-[''] before:rounded-md before:absolute before:top-full before:w-full before:h-[1px] before:scale-x-0 before:ease-in-out before:duration-300 before:transition-transform hover:before:scale-x-100 before:bg-current"} ${type === 'highlight-y' && "transition-all ease-out before:content-[''] before:opacity-25 before:bg-current before:absolute before:left-2 before:bottom-1 before:w-full before:h-[5px] before:transition-all before:ease-in-out before:duration-300 hover:before:-left-1 hover:before:bottom-0 hover:before:h-full hover:before:w-[110%] before:-z-10"}`}
    >
      {label}
    </Link>
  );
};
