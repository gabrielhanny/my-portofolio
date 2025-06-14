'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import HeroProfile from '@/components/ui/hero-profile';

const Hero = () => {
  return (
    <section
      id='Hero'
      className='custom-container border-0.25 relative flex flex-wrap overflow-hidden border-neutral-800 md:border-b lg:h-218'
    >
      <div
        className='absolute inset-y-0 w-0.25 bg-neutral-800'
        style={{
          left: 'clamp(12.31rem, 26.04vw, 23.44rem)',
        }}
      />
      <div
        className='absolute inset-y-0 w-0.25 bg-neutral-800'
        style={{
          left: 'clamp(18.5rem, 49.1vw, 44.19rem)',
        }}
      />

      {/* KIRI */}
      <div
        className='z-20 flex-[5.9] basis-80 md:pt-0'
        style={{
          width: 'clamp(24.56rem, 63.05vw, 50.44rem)',
          marginTop: 'clamp(5rem, 18.30vw, 13.81rem)',
        }}
      >
        {/* flex total harus 10 */}
        <div className='flex-start flex gap-2 md:gap-4'>
          <div className='inset-x-0 h-0.25 w-5.25 bg-white md:w-28.5' />
          <p
            className='text-neutral-25 md:text-xl-medium text-md-medium'
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
              lineHeight: 'clamp(2.125rem, 2.4vw, 1.875rem)',
            }}
          >
            Hi, I am Gabriel Hanny
          </p>
        </div>
        <h1
          className='display-lg-extrabold md:text-display-5xl mt-4 md:font-extrabold'
          style={{
            fontSize: 'clamp(2.25rem, 6.41vw, 5rem)',
            lineHeight: 'clamp(3rem, 6.41vw, 6.25rem)',
          }}
        >
          BUILDING FAST &{' '}
          <span className='text-primary-200'> INTERACTIVE </span> WEB
          EXPERIENCES
        </h1>
        <p
          className='text-lg-medium md:text-xl-medium mt-4 text-neutral-400'
          style={{
            width: 'clamp(20.00rem, 47.83vw, 37.31rem)',
            fontSize: 'clamp(1.125rem, 1.60256vw, 1.25rem)',
            lineHeight: 'clamp(2rem, 2.724vw, 2.125rem)',
          }}
        >
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut', delay: 1 }}
          className='hover:animate-spin-slow from-primary-100 to-primary-200 bg-conic to-50%'
        >
          <Button
            asChild
            className='mt-10 mb-10 w-full border-2 border-transparent md:mt-15 md:w-75'
          >
            <Link
              className='text-sm-bold md:text-md-bold text-neutral-950'
              href='#contact'
            >
              HIRE ME
            </Link>
          </Button>
        </motion.span>
      </div>

      {/* kanan */}

      <div className='top-0 right-0 flex-[4.1] basis-80 md:absolute md:mt-0'>
        <HeroProfile />
      </div>
    </section>
  );
};

export default Hero;
