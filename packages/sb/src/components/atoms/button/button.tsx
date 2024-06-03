import React, { useState } from 'react';
import { Icon, IconSize } from '../icon/icon';
export type ButtonProps = {
  primary: boolean;
  color: string;
  backgroundColor: string;
  rounded: boolean;
  label: string;
  size: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
};

export const Button = ({ primary, color, backgroundColor, rounded, label, size }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: primary ? backgroundColor : 'transparent',
        borderColor: primary ? color : backgroundColor,
        color: primary ? color : backgroundColor,
        backgroundImage: isHovered && primary ? 'linear-gradient(rgb(0 0 0/5%) 0 0)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-2 py-2 px-4 ${size} ${primary ? 'border-none' : 'border'} ${rounded ? 'rounded-full' : 'rounded-lg'} transition-all ease-in-out hover:ease-in duration-150 transform hover:-translate-y-[2px] ${primary && 'hover:shadow-button'}`}
    >
      <Icon size={size.slice(5, 7) as IconSize} name='AdjustmentsHorizontalIconOutline' />
      <span>{label}</span>
    </button>
  );
};
