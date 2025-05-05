'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import CornerAccent from '@/components/ui/corner-accent';
import RatingCard from '@/components/ui/rating-card';

const Hero = () => {
  return (
    <section className='custom-container relative min-h-[875px] overflow-visible'>
      {/* DIV KIRI */}
      <div className='mt-[180px] block md:absolute md:top-[221px] md:left-[128px] md:mt-0 md:h-[490px] md:w-[809px]'>
        <div className='relative z-40 w-full px-4 pt-4 pb-10 md:px-0 md:pt-0 md:pb-0'>
          {/* GARIS DAN NAMA  */}
          <div className='mb-2 flex items-center gap-2'>
            <div className='bg-neutral-25 h-px w-[21px] rounded md:w-[114px]' />
            <p className='text-neutral-25 text-[16px] leading-6 font-medium md:text-[20px] md:leading-7'>
              Hi, I am Gabriel Hanny Frontend Developer
            </p>
          </div>

          {/* HERO HEADER */}
          <h1 className='text-neutral-25 text-[2.25rem] leading-[2.75rem] font-extrabold uppercase md:text-[3.75rem] md:leading-[4.5rem]'>
            BUILDING FAST & <br />
            <span className='text-primary-200'>INTERACTIVE</span>{' '}
            <span className='text-neutral-25'>WEB</span>
            <br /> EXPERIENCES.
          </h1>

          {/* Description DESKTOP*/}
          <p className='mt-4 hidden text-[20px] leading-8 font-medium text-neutral-400 md:block'>
            Bridging creativity and functionality to deliver stunning,user-
            <br />
            friendly web applications
          </p>

          {/* Description MOBILE */}
          <p className='mt-4 text-[18px] leading-8 font-medium text-neutral-400 md:hidden'>
            Bridging creativity and functionality to
            <br />
            deliver stunning,user- friendly web
            <br />
            applications
          </p>

          {/* CTA */}
          <div className='mt-10 w-full md:mt-15 md:w-fit'>
            <Button
              asChild
              variant='default'
              size='hero'
              className='md:text-md flex w-full items-center justify-center text-sm font-bold text-neutral-950 shadow-[0_0_32px_#91ff02] hover:shadow-[0_0_56px_#91ff02] md:w-fit'
            >
              <Link href='#'>HIRE ME</Link>
            </Button>
          </div>

          {/* CornerAccent desktop */}
          <CornerAccent className='absolute top-[calc(100%-3px)] hidden md:block' />
        </div>
      </div>

      {/* DIV KANAN */}
      <div className='relative z-10 h-116.5 w-full overflow-hidden md:ml-107 md:h-[873.61px] md:max-w-[660.14px]'>
        {/* Overlay hitam bawah */}
        <div className='pointer-events-none absolute inset-0 z-30 bg-gradient-to-b from-transparent via-transparent to-black/90' />
        {/* Overlay hitam full untuk desktop */}

        <div className='pointer-events-none absolute inset-0 z-10 hidden bg-black opacity-[0.35] md:block' />

        <Image
          src='/images/heroImage2.jpg'
          alt='hero-image'
          fill
          priority
          className='z-0 object-cover'
        />

        {/* CornerAccent mobile */}
        <CornerAccent className='absolute bottom-[155px] left-0 z-40 md:hidden' />

        {/* RatingCard */}
        <div className='absolute bottom-12 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center md:bottom-14 md:left-[55%]'>
          <RatingCard rating='5.0' description='Many Client Trust with me' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
