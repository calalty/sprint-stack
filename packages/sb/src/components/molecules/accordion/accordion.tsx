import { useEffect, useState } from 'react';
import { Icon } from '../../atoms/icon/icon';

export type AccordionProps = {
  children: any;
  title: string;
  color: string;
  type: 'plus' | 'chevron';
  iconBackground?: string;
  border?: 'none' | 'top-bottom' | 'all';
  borderColor?: string;
  isRounded?: boolean;
  backgroundColor?: string;
};

export const Accordion = ({
  children,
  title,
  color,
  type,
  backgroundColor,
  iconBackground,
  borderColor,
  border = 'none',
  isRounded = false
}: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  const isChevron = type === 'chevron';
  const isPlus = type === 'plus';

  return (
    <div
      className={`${border === 'top-bottom' && 'border-y-2'} ${border === 'all' && 'border-2'} ${border === 'none' && 'border-none'} ${isRounded && 'isRounded-lg'} px-2`}
      style={{ color, borderColor, backgroundColor }}
    >
      <h2>
        <button
          className='flex items-center justify-between w-full text-left font-semibold py-4'
          onClick={e => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
        >
          <span>{title}</span>

          <div
            style={{ backgroundColor: iconBackground }}
            className={`w-[3.5rem] h-[2rem] flex isRounded-full justify-center items-center`}
          >
            {isPlus && (
              <Icon
                name='AnimatedPlusSubtractIcon'
                size='sm'
                isOpen={accordionOpen}
                color={color}
              />
            )}
            {isChevron && (
              <Icon
                additionalClassName={`shrink-0 mx-4 transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'} `}
                color={color}
                size='xl'
                name='ChevronDownIconSolid'
              />
            )}
          </div>
        </button>
      </h2>
      <div
        role='region'
        className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'pb-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className='overflow-hidden'>{children}</div>
      </div>
    </div>
  );
};
