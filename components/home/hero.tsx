import Image from 'next/image';

export default function Hero() {
  return (
    <section className='my-16 md:my-0 md:-mt-16'>
      <div className='flex container gap-y-8 flex-col-reverse sm:gap-x-6 md:gap-y-0 md:flex-row md:justify-between md:h-screen md:items-center'>
        <div className='flex flex-col items-start justify-center md:max-w-md'>
          <span className='text-4xl mb-2.5'>👋</span>
          <h1 className=' font-bold text-4xl mb-6'>{'Hello, I am Mehran'}</h1>
          <span className=' text-xl text-gray-500 mb-6'>
            {'I am a Software Developer with 6+ years of experience.'}
          </span>
          <button className='py-[10px] px-[1rem] bg-[#ff4500d4] text-white rounded-[10px] hover:bg-[#ff4500] transition-all duration-300'>
            Download Resume
          </button>
        </div>

        <div className='flex justify-center items-center'>
          <Image
            alt='Mehran Mahmoudkhani'
            src='/mehran.png'
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
    </section>
  );
}
