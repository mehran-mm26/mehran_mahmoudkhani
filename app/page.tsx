import Link from 'next/link';
import Navigation from '../components/navigation';
import SectionHeader from '@/components/section-header';
import Hero from '@/components/home/hero';
import WorkExperienceSection from '@/components/home/work-experience';
import SkillSetSection from '@/components/home/skill-set';
import ContactSection from '@/components/home/contact';

export default function Home() {
  return (
    <div className='relative'>
      <Navigation />
      <main>
        <Hero />

        <section className='mb-28'>
          <div className='container'>
            <SectionHeader
              emoji={'👨‍💻'}
              title={'About'}
              link={<Link href={'#'}>{'View LinkedIn'}</Link>}
            />
            <WorkExperienceSection />

            <SkillSetSection />
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}
