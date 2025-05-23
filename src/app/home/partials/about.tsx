import Image from 'next/image';
import React from 'react';

import CornerAccent from '@/components/ui/corner-accent';

const AboutSection = () => {
  return (
    <section className='relative w-full overflow-visible bg-black pt-10 md:pt-0'>
      <div className='pointer-events-none absolute inset-0 z-0 hidden md:block'>
        {/* Kiri */}
        <div className='absolute -top-2 left-75 h-44 w-60'>
          <Image
            fill
            src='/images/image_satu.png'
            className='rounded-lg object-cover'
            alt='img1'
          />
        </div>
        {/* Kanan */}
        <div className='absolute -top-2 right-55 h-48 w-64'>
          <Image
            fill
            src='/images/image_dua.png'
            className='rounded-lg object-cover'
            alt='img2'
          />
        </div>
        {/* Bawah */}
        <div className='absolute top-47.5 right-123 h-22 w-29.25'>
          <Image
            fill
            src='/images/image_tiga.png'
            className='rounded-lg object-cover'
            alt='img3'
          />
        </div>
      </div>

      {/* ✅ WRAPPER untuk konten tengah */}
      <div className='relative z-10 mx-auto hidden w-full max-w-360 px-4 md:block'>
        <CornerAccent className='absolute bottom-0 left-0 z-0 hidden rotate-90 md:block' />
        <div className='mx-auto max-w-296 text-center'>
          <span className='text-primary-200 text-lg font-medium'>ABOUT ME</span>
          <h2 className='display-2xl-extrabold text-neutral-25 mt-4'>
            <span className='block'>CRAFTING SEAMLESS</span>
            <span className='text-primary-200 block'>HIGH-PERFORMANCE WEB</span>
            EXPERIENCES
          </h2>
        </div>
        <p className='mx-auto mt-16 max-w-249 text-center text-xl leading-relaxed font-medium text-neutral-400'>
          I love turning designs into interactive, high-performance websites.
          With a keen eye for detail and a deep understanding of frontend
          technologies, I create smooth and visually appealing user experiences.
        </p>
      </div>

      {/* HEADER ON MOBILE */}
      <div className='w-full md:hidden'>
        <span className='text-md text-primary-200 mb-4 block text-center font-medium'>
          ABOUT ME
        </span>
        <h2 className='display-md-extrabold text-neutral-25 mb-4 text-center'>
          <span className='block'>CRAFTING SEAMLESS</span>
          <span className='text-primary-200 block'>HIGH-PERFORMANCE</span>
          <span className='text-primary-200'>WEB</span> EXPERIENCES
        </h2>
      </div>

      {/* PARAGRAPH */}
      <p className='text-md-medium mx-auto max-w-80 text-center leading-relaxed text-neutral-400 md:hidden'>
        I love turning designs into interactive, high-performance websites. With
        a keen eye for detail and a deep understanding of frontend technologies,
        I create smooth and visually appealing user experiences.
      </p>

      {/* IMAGES */}
      <div className='relative mt-10 flex flex-wrap items-start justify-center gap-4 md:hidden'>
        <div className='relative h-31.75 w-42.5'>
          <Image
            src='/images/image_satu.png'
            fill
            alt='image1'
            className='rounded object-cover'
          />
        </div>
        <div className='relative h-24.75 w-33.5'>
          <Image
            src='/images/image_dua.png'
            fill
            alt='image2'
            className='rounded object-cover'
          />
        </div>
        <div className='relative h-25 w-33'>
          <Image
            src='/images/image_tiga.png'
            fill
            alt='image3'
            className='rounded object-cover'
          />
        </div>

        {/* CornerAccent */}
        <CornerAccent className='absolute bottom-0 left-0 rotate-90' />
      </div>
    </section>
  );
};

export default AboutSection;
