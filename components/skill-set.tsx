import Image from 'next/image';
import { ISkillSet } from '@/types';

const SkillSet: React.FC<{ skillSet: ISkillSet }> = ({
  skillSet: { title, description, icons },
}) => {
  return (
    <article className=' border border-gray-300 rounded-[10px] p-6 bg-white flex flex-col sm:w-[47%] md:flex-1'>
      <h2 className=' text-gray-800 mb-4'>{title}</h2>
      <p className=' text-sm font-normal mb-6 text-slate-500'>{description}</p>

      <div className='flex gap-4 mt-auto'>
        {icons.length &&
          icons.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          ))}
      </div>
    </article>
  );
};

export default SkillSet;
