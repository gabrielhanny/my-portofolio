'use client';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

type RatingCardProps = {
  rating: string;
  description: string;
  className?: string;
};

const RatingCard: React.FC<RatingCardProps> = ({
  rating,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-[20px] border border-neutral-800 bg-black p-5',
        'h-[138px] w-[349px] md:h-[178px] md:w-[316px]',
        className
      )}
    >
      <p className='text-neutral-25 text-[20px] leading-tight font-bold md:text-[28px]'>
        {rating}
      </p>
      <div className='mt-2 flex gap-1'>
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src='/icons/starIcon.svg'
            alt='star'
            width={20}
            height={20}
            className='text-secondary-200 h-5 w-5'
          />
        ))}
      </div>
      <p className='text-neutral-25 mt-2 text-sm font-semibold md:text-lg'>
        {description}
      </p>
    </div>
  );
};

export default RatingCard;
