import Image from 'next/image';

import WorkingItem from '@/components/ui/working-item';

import { myExperiences, anotherExperiences } from '@/constants/working-data';

const WorkingSection = () => (
  <section className='w-full bg-black px-4 pt-10 md:px-0 md:pt-30'>
    <div className='custom-container'>
      {/* HEADER */}
      <div className='flex flex-col items-center justify-center text-center'>
        <span className='text-primary-200 mb-2 text-sm font-medium md:text-base'>
          WORKING
        </span>
        <h2 className='text-neutral-25 mb-10 text-3xl font-extrabold md:text-5xl'>
          WHY CHOOSE ME?
        </h2>
      </div>
      {/* DIV WRAPPER */}
      <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-[80.8px]'>
        {/* DIV KIRI */}
        <div className='flex flex-1 flex-col items-center text-center md:items-center'>
          <span className='text-neutral-25 mb-3 text-xl font-bold'>
            WORKING WITH ME
          </span>
          <Image
            src='/icons/man.png'
            alt='profile'
            width={60}
            height={60}
            className='mb-6 rounded-full'
          />
          <div className='w-full md:w-125 md:text-left'>
            {myExperiences.map((exp, i) => (
              <WorkingItem text={exp} key={i} />
            ))}
          </div>
        </div>
        {/* DIV KANAN */}
        <div className='mt-10 flex flex-1 flex-col items-center text-center md:mt-0 md:items-center'>
          <span className='text-neutral-25 mb-3 text-xl font-bold'>
            ANOTHER TALENT
          </span>
          <Image
            src='/icons/another.png'
            alt='profile'
            width={60}
            height={60}
            className='mb-6 rounded-full bg-neutral-900'
          />
          <div className='w-full md:w-[500px] md:text-left'>
            {anotherExperiences.map((exp, i) => (
              <WorkingItem text={exp} muted key={i} />
            ))}
          </div>
        </div>
      </div>
      {/* BUTTON */}
      <div className='mt-10 flex justify-center'>
        <button className='bg-primary-200 w-full rounded-full px-16 py-3 text-base font-bold text-neutral-950 shadow-[0_0_32px_#91ff02] transition-all hover:shadow-[0_0_56px_#91ff02] md:w-fit'>
          HIRE ME
        </button>
      </div>
    </div>
  </section>
);

export default WorkingSection;
