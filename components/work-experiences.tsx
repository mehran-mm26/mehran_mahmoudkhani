import { formatDate } from '@/utils';
import { WorkExperience } from '@/types';

const WorkExperiences: React.FC<{
  workExperiences: WorkExperience[];
}> = ({ workExperiences }) => {
  return workExperiences.map((workExperience) => {
    return (
      <WorkExperienceComponent
        key={workExperience.companyName}
        workExperience={workExperience}
      />
    );
  });
};

const WorkExperienceComponent: React.FC<{ workExperience: WorkExperience }> = ({
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

export default WorkExperiences;
