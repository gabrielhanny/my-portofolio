'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { skillsIcon, skillBars } from '@/constants/skill-data';

function SkillBar({ name, value }: { name: string; value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className='mb-4 flex w-full items-center gap-2'>
      <div className='relative h-12 flex-1 overflow-hidden rounded-xl'>
        {inView && (
          <motion.div
            className='absolute top-0 left-0 h-12 rounded-xl'
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1 }}
            style={{
              background:
                'repeating-linear-gradient(135deg, #497A1A, #497A1A 8px, #5c941f 8px, #5c941f 16px)',
            }}
          />
        )}
        <div className='text-neutral-25 relative z-10 flex h-12 items-center pl-6 font-semibold'>
          {name}
        </div>
      </div>
      <span className='text-neutral-25 w-12 text-right font-semibold'>
        {value}%
      </span>
    </div>
  );
}

const SkillSection = () => {
  return (
    <section className='custom-container w-full bg-black px-4 pt-12.5 md:px-0 md:pt-30'>
      <div className='mx-auto w-full md:flex md:max-w-300 md:items-start md:gap-20'>
        {/* KIRI: Header + Icons */}
        <div className='w-full md:w-1/2 md:max-w-[500px]'>
          <span className='text-primary-200 text-md block pb-2 font-medium md:text-lg'>
            SKILLS
          </span>
          <h2 className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold mb-8'>
            <span className='block'>SKILLS THAT BRING</span>
            <span className='block'>IDEAS TO LIFE</span>
          </h2>
          <div className='grid grid-cols-4 justify-items-center gap-x-4 gap-y-6 md:w-full md:grid-cols-4 md:grid-rows-2 md:gap-x-8 md:gap-y-8'>
            {skillsIcon.map((item) => (
              <div
                key={item.name}
                className='relative flex h-12 w-12 items-center justify-center rounded-full bg-[#111] md:h-16 md:w-16'
              >
                <Image
                  src={item.icon}
                  fill
                  alt={item.name}
                  className='object-contain p-1'
                />
              </div>
            ))}
          </div>
        </div>

        {/* KANAN: Skill Bars */}
        <div className='mt-10 flex w-full flex-col justify-start md:mt-0 md:w-1/2 md:max-w-[602px] md:pl-10'>
          {skillBars.map((item) => (
            <SkillBar
              key={item.name + item.value}
              name={item.name}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
