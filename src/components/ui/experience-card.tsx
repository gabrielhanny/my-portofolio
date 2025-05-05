'use client';

import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

export type Experience = {
  index: number;
  alignment?: 'left' | 'right' | 'mobile';
  company: string;
  icon: string;
  title: string;
  period: string;
  description: string;
  color: string;
};

const ExperienceCard = ({
  alignment = 'left',
  company,
  icon,
  title,
  period,
  description,
  color,
}: Experience) => {
  return (
    <div
      className={cn(
        'relative z-10 rounded-[20px] border border-neutral-700 bg-black p-6 md:w-[510px]',
        alignment === 'left' ? 'md:justify-self-end' : 'md:justify-self-start',
        'ml-[60px] md:ml-0'
      )}
    >
      {/* TAHUN + ICON (DESKTOP) */}
      <div className='flex items-center justify-between'>
        <span className='text-sm text-neutral-400 md:text-lg'>{period}</span>
        <Image
          src={icon}
          alt={company}
          width={114}
          height={48}
          className='hidden md:block'
        />
      </div>

      {/* TITLE + COMPANY */}
      <div className='mt-2 flex items-center gap-2'>
        <span className='text-neutral-25 text-md font-bold md:text-xl'>
          {title}
        </span>
        <span className={`${color} text-md font-bold md:text-xl`}>
          {company}
        </span>
      </div>

      {/* ICON (MOBILE only) */}
      <Image
        src={icon}
        alt={company}
        width={76}
        height={32}
        className='mt-2 md:hidden'
      />

      {/* DESKRIPSI */}
      <p className='md:text-md mt-2 text-sm text-neutral-400'>{description}</p>
    </div>
  );
};

export default ExperienceCard;
