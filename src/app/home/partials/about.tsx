import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section id='AboutSection' className='w-full px-4 pt-10 md:px-0 md:pt-30'>
      <div className='relative mx-auto w-full max-w-300'>
        {/* FLOATING IMAGES - z-0: back layer */}
        <div className='pointer-events-none absolute inset-0 z-0 hidden md:block'>
          <div
            className='absolute h-44.5 w-59.5'
            style={{ top: '-10px', left: '110px' }}
          >
            <Image
              src='/images/image_satu.png'
              alt='image1'
              width={238}
              height={178}
              className='rounded-lg object-cover'
            />
          </div>
          <div
            className='absolute h-46.75 w-62.5'
            style={{ top: '-20px', left: '895px' }}
          >
            <Image
              src='/images/image_dua.png'
              alt='image2'
              width={250}
              height={187}
              className='rounded-lg object-cover'
            />
          </div>
          <div
            className='absolute h-22 w-29.25'
            style={{ top: '170px', left: '750px' }}
          >
            <Image
              src='/images/image_tiga.png'
              alt='image3'
              width={117}
              height={88}
              className='rounded-lg object-cover'
            />
          </div>
        </div>

        {/* HEADER CONTENT - z-10: front layer */}
        <div className='relative z-10 hidden flex-col items-center justify-center text-center md:flex'>
          <span className='text-primary-200 pb-4 text-lg font-medium'>
            ABOUT ME
          </span>
          <h2 className='text-neutral-25 display-2xl-extrabold pb-4'>
            <span className='block'>CRAFTING SEAMLESS</span>
            <span className='text-primary-200 block'>HIGH-PERFORMANCE WEB</span>
            EXPERIENCES
          </h2>
          <p className='text-md-medium w-full max-w-249 text-neutral-400 md:pt-16 md:text-xl'>
            I love turning designs into interactive, high-performance websites.
            With a keen eye for detail and a deep understanding of frontend
            technologies, I create smooth and visually appealing user
            experiences.
          </p>
        </div>

        {/* HEADER MOBILE */}
        <div className='w-full text-center md:hidden'>
          <span className='text-md text-primary-200 pb-4 font-medium'>
            ABOUT ME
          </span>
          <h2 className='display-md-extrabold text-neutral-25 pb-4'>
            <span className='block'>CRAFTING SEAMLESS </span>
            <span className='text-primary-200 block'>
              HIGH-PERFORMANCE
            </span>{' '}
            <span className='text-primary-200'>WEB</span> EXPERIENCES
          </h2>
          <p className='text-md-medium text-center text-neutral-400'>
            I love turning designs into interactive, high-
            <br />
            performance websites. With a keen eye for detail <br />
            and a deep understanding of frontend <br />
            technologies, I create smooth and visually <br />
            appealing user experiences.
          </p>
        </div>

        {/* MOBILE IMAGES */}
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
          <div className='relative h-[100px] w-[132px]'>
            <Image
              src='/images/image_tiga.png'
              fill
              alt='image3'
              className='rounded object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
