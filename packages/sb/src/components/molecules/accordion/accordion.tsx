import { useEffect, useState } from 'react';
import { Icon } from '../../atoms/icon/icon';

export type AccordionProps = {
  children: any;
  title: string;
  hexColor: string;
  type: 'plus' | 'chevron';
};

export const Accordion = ({ children, title, hexColor, type }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  const isChevron = type === 'chevron';
  const isPlus = type === 'plus';

  return (
    <div className='border-y-2' style={{ color: hexColor, borderColor: `${hexColor}25` }}>
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
            style={{ backgroundColor: `${hexColor}10` }}
            className={`w-[3.5rem] h-[2rem] flex rounded-full justify-center items-center`}
          >
            {isPlus && (
              <svg
                fill={hexColor}
                className='shrink-0 mx-4'
                width='16'
                height='16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  y='7'
                  width='16'
                  height='1.5'
                  rx='1'
                  className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
                />
                <rect
                  y='7'
                  width='16'
                  height='1.5'
                  rx='1'
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
                />
              </svg>
            )}

            {isChevron && (
              <Icon
                additionalClassName={`shrink-0 mx-4 transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'} `}
                color={hexColor}
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
