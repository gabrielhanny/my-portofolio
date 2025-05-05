'use client';

import { useState } from 'react';

import TestimonialCard from '@/components/ui/testimonial-card';

import { testimonials } from '@/constants/testimonial-data';

const CARDS_PER_PAGE = 4;

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const startIdx = currentPage * CARDS_PER_PAGE;
  const currentCards = testimonials.slice(startIdx, startIdx + CARDS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className='w-full bg-black px-4 pt-10 md:px-0 md:pt-30'>
      <div className='mx-auto w-full max-w-[393px] md:max-w-[1200px]'>
        {/* HEADER */}
        <div className='mb-10 flex flex-col items-center justify-center text-center'>
          <span className='text-primary-200 text-md mb-2 font-medium md:text-lg'>
            TESTIMONIALS
          </span>
          <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
            PEOPLE SAYS ABOUT ME
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className='mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10'>
          {currentCards.map((item, idx) => (
            <TestimonialCard {...item} key={idx} />
          ))}
        </div>

        {/* ARROW BUTTONS */}
        <div className='flex justify-center gap-6'>
          <button
            onClick={handlePrev}
            className='hover:border-primary-200 hover:text-primary-200 flex h-12 w-12 items-center justify-center rounded-full border-2 border-neutral-700 text-neutral-400 transition'
          >
            {/* left arrow */}
            <svg
              width='20'
              height='20'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
            >
              <path d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className='border-primary-200 bg-primary-200 flex h-12 w-12 items-center justify-center rounded-full border-2 text-neutral-950 shadow-[0_0_16px_#91ff02] transition hover:scale-105'
          >
            {/* right arrow */}
            <svg
              width='20'
              height='20'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
            >
              <path d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
