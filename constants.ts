import { INavigationItem, ISkillSet, WorkExperience } from './types';

export const navigationItems: INavigationItem[] = [
  {
    href: 'about',
    title: 'About',
  },
  {
    href: 'work',
    title: 'Work',
  },
  {
    href: 'contact',
    title: 'Contact',
  },
];

export const workExperiences: WorkExperience[] = [
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

export const skillSets: ISkillSet[] = [
  {
    title: 'Frontend',
    description: 'I strive for pixel-perfect finalized design implementation.',
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
