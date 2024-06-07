import { iconMapping } from './icon-mappings';

export type IconName = keyof typeof iconMapping;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type IconTypes = {
  name: IconName;
  size: IconSize;
  color: string;
};

const getIconSize = (size: IconSize) => {
  switch (size) {
    case 'xs':
      return '14';
    case 'sm':
      return '16';
    case 'md':
      return '18';
    case 'lg':
      return '20';
    case 'xl':
      return '22';
    default:
      return '16';
  }
};

export const Icon = ({ name, size, color }: IconTypes) => {
  const IconComponent = iconMapping[name];
  return IconComponent ? <IconComponent color={color} width={getIconSize(size)} /> : null;
};
