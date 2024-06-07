import React, { useState } from 'react';
import { Icon, IconName, IconSize } from '../icon/icon';
export type ButtonProps = {
  primary: boolean;
  color: string;
  backgroundColor: string;
  rounded: boolean;
  label: string;
  iconName: IconName;
  size: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
};

export const Button = ({
  primary,
  color,
  backgroundColor,
  rounded,
  label,
  size,
  iconName
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: primary ? backgroundColor : 'transparent',
        borderColor: primary ? color : backgroundColor,
        color: primary ? color : backgroundColor,
        backgroundImage: isHovered ? 'linear-gradient(rgb(0 0 0/2.5%) 0 0)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex font-semibold items-center gap-2 py-2 px-4 ${size} ${primary ? 'border-none' : 'border'} ${rounded ? 'rounded-full' : 'rounded-lg'} transition-all ease-in-out hover:ease-in duration-150 transform hover:-translate-y-[2px] ${primary && 'hover:shadow-button'}`}
    >
      <Icon
        color={primary ? color : backgroundColor}
        size={size.slice(5, 7) as IconSize}
        name={iconName}
      />
      <span>{label}</span>
    </button>
  );
};
