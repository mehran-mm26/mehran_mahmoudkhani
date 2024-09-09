import { ReactElement } from 'react';

const SectionHeader = ({
  emoji,
  title,
  link,
}: {
  emoji: string;
  title: string;
  link?: ReactElement;
}) => {
  return (
    <header className='relative border-b mb-[5%] h-12'>
      <div
        id={title.toLowerCase()}
        className='w-[1px] h-[1px] bottom-32 absolute'
      ></div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <span className=' text-4xl'>{emoji}</span>
          <h2 className=' ml-6 text-lg font-bold'>{title}</h2>
        </div>
        <div>{link && link}</div>
      </div>
    </header>
  );
};

export default SectionHeader;
