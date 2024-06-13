import { SVGProps } from 'react';

interface AnimatedPlusSubtractIconProps extends SVGProps<SVGSVGElement> {
  isOpen: boolean;
}

export const SprintStackLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill={props.color} xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='m2.13 23.995c5.493-1.808 13.457-6.02 18.996-9.782.465-.314.827-.607.827-1.118 0-.889-1.655-2.08-2.458-2.555-4.359 4.456-13.033 11.134-17.366 13.455m5.096-3.785c3.388-2.304 8.31-6.638 9.975-8.996.393-.554.683-.876.683-1.456 0-.952-1.128-1.65-1.94-2.135-1.946 4.51-6.316 10.125-8.718 12.587m2.591-3.528c2.344-2.967 4.188-6.454 4.188-8.958 0-1.308-.953-2.222-2.196-2.916.024 2.721-.934 9.101-1.992 11.874m.496-2.862c.438-2.847.18-6.285-.379-8.442-.304-1.174-1.38-2.5-2.376-2.913 1.305 3.643 2.426 8.832 2.755 11.355m-.965-3.995c-1.026-2.728-3.584-8.415-7.347-9.825 2.45 2.66 6.083 7.935 7.347 9.825' />
  </svg>
);

export const AnimatedPlusSubtractIcon = ({ isOpen, ...props }: AnimatedPlusSubtractIconProps) => (
  <svg fill={props.color} viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect
      y='7'
      width='16'
      height='1.5'
      rx='1'
      className={`transform origin-center transition duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`}
    />
    <rect
      y='7'
      width='16'
      height='1.5'
      rx='1'
      className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`}
    />
  </svg>
);
