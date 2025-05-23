import React from 'react';

import ExperienceCard from '@/components/ui/experience-card';

import { experiences } from '@/constants/experience-data';

const ExperienceSection = () => {
  return (
    <section className='w-full bg-black px-4 pt-10 md:px-0 md:pt-30'>
      <div className='mx-auto w-full max-w-[393px] md:max-w-300'>
        {/* Header */}
        <div className='mb-10 flex flex-col items-center justify-center text-center'>
          <span className='text-primary-200 text-md mb-2 font-medium md:text-xl'>
            EXPERIENCE
          </span>
          <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
            PROFESSIONAL WORK
          </h2>
        </div>

        {/* --- DESKTOP Zigzag --- */}
        <div className='relative hidden md:grid md:grid-cols-[1fr_60px_1fr] md:gap-y-24'>
          {/* CENTER BORDER */}
          <div className='absolute top-0 left-1/2 z-0 h-full w-px -translate-x-1/2 bg-neutral-700' />
          {experiences.map((exp, idx) => (
            <React.Fragment key={exp.id}>
              {/* LEFT */}
              {idx % 2 !== 0 && (
                <div className='col-start-1 row-start-auto w-[510px] justify-self-end'>
                  <ExperienceCard index={idx + 1} alignment='left' {...exp} />
                </div>
              )}
              {/*Number */}
              <div className='col-start-2 row-start-auto flex flex-col items-center justify-start'>
                {idx === 0 && <div className='h-11 w-px bg-neutral-700' />}
                <div className='border-primary-200 text-primary-200 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-black font-bold'>
                  {idx + 1}
                </div>
                {idx < experiences.length - 1 && (
                  <div className='h-24 w-px bg-neutral-700' />
                )}
              </div>
              {/* RIGHT */}
              {idx % 2 === 0 && (
                <div className='col-start-3 row-start-auto w-[510px] justify-self-start'>
                  <ExperienceCard index={idx + 1} alignment='right' {...exp} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* --- MOBILE: Vertical Timeline --- */}
        <div className='flex flex-col gap-8 md:hidden'>
          {experiences.map((exp, idx) => (
            <div key={exp.id} className='flex items-start gap-4'>
              {/* Timeline Column */}
              <div className='flex flex-col items-center'>
                {idx !== 0 && <div className='h-4 w-px bg-neutral-700' />}
                <div className='border-primary-200 text-primary-200 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-black font-bold'>
                  {idx + 1}
                </div>
                {idx !== experiences.length - 1 && (
                  <div className='h-full w-px flex-1 bg-neutral-700' />
                )}
              </div>

              {/* Card */}
              <div className='flex-1'>
                <ExperienceCard index={idx + 1} alignment='mobile' {...exp} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
