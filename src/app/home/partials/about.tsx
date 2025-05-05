import Image from 'next/image';
import React from 'react';

import CornerAccent from '@/components/ui/corner-accent';

const AboutSection = () => {
  return (
    <section className='w-fullpx-4 relative min-h-[600px] pt-10 md:px-0 md:pt-30'>
      {/* DIV WRAPPER */}
      <div className='relative mx-auto w-full md:max-w-[1200px]'>
        {/* HEADER */}
        <div className='relative flex w-full flex-col items-center justify-center text-center'>
          {/* Floating IMAGES (DESKTOP) */}
          <div className='hidden md:block'>
            <div
              className='absolute z-10 h-[178px] w-[238px]'
              style={{ top: '35px', left: '20px' }}
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
              className='absolute z-10 h-[187px] w-[250px]'
              style={{ top: '30px', left: '970px' }}
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
              className='absolute z-40 h-[88px] w-[117px]'
              style={{ top: '190px', left: '830px' }}
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

          {/* HEADER ON DESKTOP */}
          <div className='hidden md:block'>
            <span className='text-primary-200 pb-4 text-lg font-medium'>
              ABOUT ME
            </span>
            <h2 className='text-neutral-25 display-2xl-extrabold pb-4'>
              <span className='block'>CRAFTING SEAMLESS </span>
              <span className='text-primary-200 block'>
                HIGH-PERFORMANCE WEB
              </span>{' '}
              EXPERIENCES
            </h2>
          </div>

          {/* CornerAccent desktop */}
          <CornerAccent className='absolute bottom-[-24px] left-0 hidden rotate-90 md:block' />

          {/* HEADER ON MOBILE */}
          <div className='w-full md:hidden'>
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
          </div>

          {/* ABOUT TEXT */}
          <p className='text-md-medium w-full pt-4 text-neutral-400 md:pt-16 md:text-xl'>
            I love turning designs into interactive, high-performance
            websites.With a keen eye for detail and a deep
            <br />
            understanding of frontend technologies, I create smooth and visually
            appealing user experiences.
          </p>
        </div>

        {/* MOBILE IMAGES */}
        <div className='relative mt-10 flex flex-wrap items-start justify-center gap-4 md:hidden'>
          <div className='relative h-[127px] w-[170px]'>
            <Image
              src='/images/image_satu.png'
              fill
              alt='image1'
              className='rounded object-cover'
            />
          </div>
          <div className='relative h-[99px] w-[134px]'>
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
          {/* CornerAccent mobile */}
          <CornerAccent className='absolute bottom-0 left-0 rotate-90' />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
