'use client';

import { motion } from 'framer-motion';
import React from 'react';

import ExperienceCard from '@/components/ui/experience-card';

import { experiences } from '@/constants/experience-data';

const ExperienceSection = () => {
  return (
    <section className='w-full bg-black px-4 pt-10 md:px-0 md:pt-30'>
      <div className='custom-container'>
        {/* HEADER */}
        <div className='mb-10 flex flex-col items-center justify-center text-center'>
          <span className='text-primary-200 text-md mb-2 font-medium md:text-xl'>
            EXPERIENCE
          </span>
          <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
            PROFESSIONAL WORK
          </h2>
        </div>

        {/* DESKTOP TIMELINE */}
        <div className='relative hidden md:grid md:grid-cols-[1fr_80px_1fr] md:gap-y-24'>
          {experiences.map((exp, idx) => (
            <React.Fragment key={exp.id}>
              {/* LEFT */}
              {idx % 2 !== 0 && (
                <div className='col-start-1 row-start-auto w-[510px] justify-self-end'>
                  <ExperienceCard index={idx + 1} alignment='left' {...exp} />
                </div>
              )}

              {/* TIMELINE CIRCLE + LINE */}
              <div className='col-start-2 row-start-auto flex flex-col items-center justify-center'>
                {/* Upper Line */}
                {idx !== 0 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    transition={{ duration: 0.6 }}
                    className='w-px bg-neutral-700'
                  />
                )}

                {/* Circle Number */}
                <div className='text-primary-200 border-primary-200 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-black font-bold'>
                  {idx + 1}
                </div>

                {/* Bottom Line */}
                {idx < experiences.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    transition={{ duration: 0.6 }}
                    className='w-px bg-neutral-700'
                  />
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

        {/* MOBILE TIMELINE */}
        <div className='flex flex-col gap-8 md:hidden'>
          {experiences.map((exp, idx) => (
            <div key={exp.id} className='flex items-start gap-4'>
              {/* Number + Line */}
              <div className='flex w-10 flex-col items-center'>
                {idx !== 0 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 32 }}
                    transition={{ duration: 0.5 }}
                    className='w-px bg-neutral-700'
                  />
                )}
                <div className='text-primary-200 border-primary-200 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-black font-bold'>
                  {idx + 1}
                </div>
                {idx < experiences.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 32 }}
                    transition={{ duration: 0.5 }}
                    className='w-px bg-neutral-700'
                  />
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
