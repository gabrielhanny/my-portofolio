import React from 'react';

import ServiceCard from '@/components/ui/service-card';

const ServiceSection = () => {
  return (
    <section className='m-0 min-h-[700px] w-full p-0'>
      <div className='custom-container pt-[10px] pl-[8px] md:pt-[30px]'>
        {/* HEADER */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between'>
          <div className='flex flex-col items-start md:ml-20 md:w-1/2'>
            <span className='text-primary-200 text-md font-medium uppercase md:text-lg'>
              SERVICE
            </span>
            <h2 className='text-neutral-25 mt-2 text-[2rem] leading-tight font-extrabold md:text-[2.5rem]'>
              <span className='block'>MY SERVICE</span>
              <span className='block'>EXPERTISE</span>
            </h2>
            {/* Service Text on MOBILE */}
            <div className='text-md mt-4 font-medium text-neutral-400 md:hidden'>
              Creating modern, intuitive, and visually consistent
              <br />
              web experiences that align with industry
              <br />
              trends and user expectations.
            </div>
          </div>

          {/* Service Text on DESKTOP */}
          <div className='hidden md:block md:w-126 md:max-w-none md:pt-[29px] md:text-right'>
            <span className='text-xl font-medium whitespace-pre-line text-neutral-400'>
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </span>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className='mt-6 flex flex-col gap-6 bg-blue-700 md:mt-16 md:ml-20 md:flex-row md:gap-10'>
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
