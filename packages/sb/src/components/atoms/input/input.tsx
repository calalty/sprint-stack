export type InputProps = {
  label: string;
  type: 'filled' | 'outlined' | 'standard';
  color: string;
  backgroundColor?: string;
  borderColor?: string;
};

export const Input = ({
  label,
  type = 'standard',
  backgroundColor,
  color,
  borderColor
}: InputProps) => {
  if (type === 'filled')
    return (
      <div className='relative'>
        <input
          style={{ backgroundColor, color, borderColor: borderColor ?? color }}
          type='text'
          id='floating_filled'
          className='block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
        />
        <label
          style={{ color }}
          htmlFor='floating_filled'
          className='absolute border-0 text-sm duration-300 -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
        >
          {label}
        </label>
      </div>
    );

  if (type === 'outlined')
    return (
      <div className='relative'>
        <input
          style={{ color, borderColor: borderColor ?? color }}
          type='text'
          id='floating_outlined'
          className='border-2 block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
        />
        <label
          style={{ color }}
          htmlFor='floating_outlined'
          className='absolute text-sm duration-300 -translate-y-4 bg-white scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
        >
          {label}
        </label>
      </div>
    );

  return (
    <div className='relative z-0'>
      <input
        style={{ color, borderColor: borderColor ?? color }}
        type='text'
        id='floating_standard'
        className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        placeholder=' '
      />
      <label
        style={{ color }}
        htmlFor='floating_standard'
        className='absolute text-sm duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
      >
        {label}
      </label>
    </div>
  );
};
