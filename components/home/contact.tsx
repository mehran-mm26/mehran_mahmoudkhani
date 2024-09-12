import SectionHeader from '../section-header';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className='mb-24'>
      <div className='container'>
        <SectionHeader emoji={'🤙'} title={'Contact'} />

        <div className='flex flex-col sm:flex-row '>
          <div className='sm:w-1/2 flex flex-col items-center sm:items-start'>
            <p className='mb-8'>
              {
                'Are you interested in collaborating or want to connect or chat? If so, hit the contact button down below or'
              }
              <a href='#' rel='noopener no-referer'>
                {'contact me via LinkedIn.'}
              </a>
            </p>

            <a
              rel='noopener no-referer'
              className='text-[#ff4500d4] hover:text-[#ff4500] hover:cursor-pointer'
            >
              Contact Me
            </a>
          </div>
          <Image
            className='rounded-[10px] mx-auto sm:ml-auto sm:mr-0'
            src={'/telephone.jpg'}
            alt='telephone'
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
