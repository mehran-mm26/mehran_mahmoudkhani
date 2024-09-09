import Image from 'next/image';
import Link from 'next/link';
import mehranImage from '@/public/mehran.png'
import React, { Fragment, ReactElement } from 'react';

export default function Home() {
  const navigationItems: INavigationItem[] = [
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/work',
      title: 'Work',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ];

  const workExperiences: WorkExperience[] = [
    {
      date: {
        startDate: new Date('2021-03-01'),
        endDate: 'Present',
      },
      companyName: 'IDmelon',
      location: 'Iran, Tehran (Remote)',
      position: 'Full Stack Developer',
    },
    {
      date: {
        startDate: new Date('2020-06-01'),
        endDate: new Date('2020-12-01'),
      },
      companyName: '30Nama',
      location: 'Iran, Tehran',
      position: 'Android Developer',
    },
    {
      date: {
        startDate: new Date('2018-08-01'),
        endDate: new Date('2020-05-01'),
      },
      companyName: 'Nobka',
      location: 'Iran, Tehran',
      position: 'Android Developer',
    },
    {
      date: {
        startDate: new Date('2017-04-01'),
        endDate: new Date('2018-08-01'),
      },
      companyName: 'FreeLancer',
      location: 'Iran, Tehran',
      position: 'Android Developer',
    },
  ];

  const skillSets: SkillSet[] = [
    {
      title: 'Frontend',
      description:
        'I strive for pixel-perfect finalized design implementation.',
      icons: [
        {
          src: '/react.svg',
          alt: 'react',
        },
        {
          src: '/nextjs.svg',
          alt: 'next',
        },
        {
          src: '/webflow.svg',
          alt: 'css',
        },
        {
          src: '/typescript.svg',
          alt: 'typescript',
        },
      ],
    },
    {
      title: 'Backend',
      description: '',
      icons: [
        {
          src: '/nodejs.svg',
          alt: 'nodejs',
        },
        {
          src: '/mongodb.svg',
          alt: 'mongodb',
        },
        {
          src: '/redis.svg',
          alt: 'redis',
        },
        {
          src: '/aws.svg',
          alt: 'aws',
        },
      ],
    },
    {
      title: 'Android',
      description: '',
      icons: [
        {
          src: 'android.svg',
          alt: 'android',
        },
        {
          src: '/java.svg',
          alt: 'java',
        },
        {
          src: '/kotlin.svg',
          alt: 'kotlin',
        },
        {
          src: '/git.svg',
          alt: 'git',
        },
      ],
    },
  ];

  return (
    <Fragment>
      <Navigation navigationItems={navigationItems} />
      <main className=''>
        <section className='my-16 md:my-0 md:-mt-16'>
          <div className='flex container gap-y-8 flex-col-reverse sm:gap-x-6 md:gap-y-0 md:flex-row md:justify-between md:h-screen md:items-center'>
            <div className='flex flex-col items-start justify-center md:max-w-md'>
              <p className='text-4xl mb-2.5'>👋</p>
              <h1 className=' font-bold text-4xl mb-6'>
                {'Hello, I am Mehran'}
              </h1>
              <p className=' text-xl text-gray-500 mb-6'>
                {'I am a Software Developer with 6+ years of experience.'}
              </p>
              <button className='py-[10px] px-[1rem] bg-[#ff4500d4] text-white rounded-[10px] hover:bg-[#ff4500] transition-all duration-300'>
                Download Resume
              </button>
            </div>

            <div className='flex justify-center items-center'>
              <Image
                alt='Mehran Mahmoudkhani'
                src={mehranImage}
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
        </section>

        <section className='mb-28'>
          <div className='container'>
            <SectionHeader
              emoji={'👨‍💻'}
              title={'About'}
              link={<Link href={'#'}>{'View LinkedIn'}</Link>}
            />
            <div className='flex flex-col sm:flex-row gap-16'>
              <section className='flex flex-col sm:w-1/2 mb-16'>
                <h2 className=' font-medium text-lg text-gray-500 mb-4'>
                  {'My Story'}
                </h2>
                <p className='mb-6 leading-6 text-zinc-800'>
                  {
                    'I have been a software developer since 2017. During this time, I have had the opportunity to work with some amazing people on several cutting-edge projects. Projects I’ve worked on include employee management application (TiTime android application), smart parking reservation and management  (Parkban & Parkjoo Android Applications), IDmelon Websites (Wordpress & Webflow, Hugo), IDmelon customers admin panel (React) and IDmelon Backend services (NodeJs, Mongo).'
                  }
                </p>
                <p className='leading-6 text-zinc-800'>
                  {
                    'As a software engineer, I have been responsible for helping junior developers to on board with projects and leading them to write error prune software using best practices.'
                  }
                </p>
              </section>
              <section className='flex flex-col sm:w-1/2'>
                <h2 className=' font-medium text-lg text-gray-500 mb-4'>
                  {"Where I've Worked"}
                </h2>

                <WorkExperiences workExperiences={workExperiences} />
              </section>
            </div>

            <section>
              <h2 className='font-medium text-lg text-gray-500 mb-4'>
                {'My Skillsets'}
              </h2>

              <div className='flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:justify-center md:justify-stretch'>
                {skillSets.map((skillSet) => (
                  <SkillSet key={skillSet.title} skillSet={skillSet} />
                ))}
              </div>
            </section>
          </div>
        </section>

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
      </main>
    </Fragment>
  );
}

interface INavigationItem {
  href: string;
  title: string;
}

function Navigation({
  navigationItems,
}: {
  navigationItems: INavigationItem[];
}) {
  return (
    <header className='sticky border-b inset-0 bg-white'>
      <div className='flex container py-5 justify-between'>
        <p>{'Mehran Mahmoudkhani'}</p>
        <nav role='navigation' className='hidden sm:flex sm:gap-5'>
          <ul className='flex gap-6'>
            {navigationItems.map(({ href, title }) => {
              return (
                <li key={href}>
                  <a href={href}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

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
    <header className='border-b mb-[5%] h-12'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <h1 className=' text-4xl'>{emoji}</h1>
          <h1 className=' ml-6 text-lg font-bold'>{title}</h1>
        </div>
        <div>{link && link}</div>
      </div>
    </header>
  );
};

interface WorkExperience {
  date: {
    startDate: Date;
    endDate: Date | 'Present';
  };
  companyName: string;
  location: string;
  position: string;
}

const WorkExperiences: React.FC<{ workExperiences: WorkExperience[] }> = ({
  workExperiences,
}) => {
  return workExperiences.map((workExperience) => {
    return (
      <WorkExperience
        key={workExperience.companyName}
        workExperience={workExperience}
      />
    );
  });
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

const WorkExperience: React.FC<{ workExperience: WorkExperience }> = ({
  workExperience: {
    date: { startDate, endDate },
    companyName,
    location,
    position,
  },
}) => {
  return (
    <div className='mb-6'>
      <h3 className=' text-sm text-gray-500 mb-1'>
        <time>{formatDate(startDate)}</time>
        <span>{' - '}</span>
        <time>{endDate === 'Present' ? 'Present' : formatDate(endDate)}</time>
      </h3>

      <span className='flex mb-1'>
        <h4 className='text-base font-bold'>{companyName}</h4>
        <address className='ml-4 text-gray-600 not-italic'>{location}</address>
      </span>

      <h5>{position}</h5>
    </div>
  );
};

interface SkillSet {
  title: string;
  description: string;
  icons: Array<{ src: string; alt: string }>;
}

const SkillSet: React.FC<{ skillSet: SkillSet }> = ({
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
