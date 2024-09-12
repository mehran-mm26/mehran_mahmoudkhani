import { workExperiences } from "@/constants";
import WorkExperiences from "../work-experiences";

export default function WorkExperienceSection() {
  return (
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
  );
}
