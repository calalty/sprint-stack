import Image from 'next/image';

export type TestimonialCardProps = {
  color: string;
  backgroundColor: string;
  quote: string;
  name: string;
  role: string;
  isBlur?: boolean;
  isReverse?: boolean;
  isBorder?: boolean;
  imageUrl?: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  imageUrl,
  backgroundColor,
  color,
  isBlur,
  isReverse,
  isBorder
}) => {
  return (
    <div
      className={`backdrop-filter ${isBlur && 'backdrop-blur-md'} ${isReverse && 'flex-col-reverse'} flex flex-col p-6 rounded-lg`}
      style={{ backgroundColor, color }}
    >
      <blockquote className={`italic ${isReverse ? 'mt-4' : 'mb-4'}`}>
        <p className='text-md'>{quote}</p>
      </blockquote>

      <div
        style={{ borderColor: `${color}50` }}
        className={`flex items-center ${isReverse ? 'pb-4' : 'pt-4'} ${isReverse && isBorder ? 'border-b-[1px]' : 'border-t-[1px]'} gap-x-4`}
      >
        {imageUrl && (
          <Image
            style={{ backgroundColor: color }}
            className='rounded-full'
            width='65'
            height='65'
            src={imageUrl}
            alt={`Image of ${name}`}
          />
        )}
        <div className='flex flex-col'>
          <p className='font-extrabold text-xl'>{name}</p>
          <p className='font-thin text-sm'>{role}</p>
        </div>
      </div>
    </div>
  );
};
