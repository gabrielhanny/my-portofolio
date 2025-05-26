'use client';

import React from 'react';

import ServiceCard from '@/components/ui/service-card';

const ServiceSection = () => {
  return (
    <section className='min-h-175 w-full bg-black'>
      <div className='custom-container pt-20 md:pt-19.75'>
        {/* HEADER */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between'>
          {/* LEFT */}
          <div className='flex flex-col items-start md:w-1/2'>
            <span className='text-primary-200 text-md font-medium uppercase md:text-lg'>
              SERVICE
            </span>
            <h2 className='text-neutral-25 display-md-extrabold md:display-2xl-extrabold mt-2 leading-tight'>
              <span className='block'>MY SERVICE</span>
              <span className='block'>EXPERTISE</span>
            </h2>

            {/* MOBILE TEXT */}
            <p className='text-md mt-4 font-medium text-neutral-400 md:hidden'>
              Creating modern, intuitive, and visually consistent
              <br />
              web experiences that align with industry
              <br />
              trends and user expectations.
            </p>
          </div>

          {/* DESKTOP TEXT */}
          <div className='hidden md:block md:w-125 md:pt-7 md:text-right'>
            <span className='text-xl font-medium whitespace-pre-line text-neutral-400'>
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </span>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className='mt-10 flex flex-col gap-8 md:mt-16 md:flex-row md:gap-8'>
          <ServiceCard
            number='01'
            icon='/icons/monitor.svg'
            title='Custom Website Development'
            description='Building responsive, fast, and scalable websites tailored to your needs.'
          />
          <ServiceCard
            number='02'
            icon='/icons/monitor.svg'
            title='Web Performance Optimization'
            description='Enhancing website speed, SEO, and overall performance for better results.'
          />
          <ServiceCard
            number='03'
            icon='/icons/monitor.svg'
            title='Website Maintenance & Debugging'
            description='Fixing bugs, improving UI, and ensuring smooth performance over time.'
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
