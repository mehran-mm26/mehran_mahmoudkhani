import { skillSets } from '@/constants';
import SkillSet from '../skill-set';

export default function SkillSetSection() {
  return (
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
  );
}
