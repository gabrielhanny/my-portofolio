import React from 'react';

import ServiceCard from '@/components/ui/service-card';

const ServiceSection = () => {
  return (
    <section className='min-h-165 w-full'>
      <div className='custom-container px-4.5 pt-2.5 md:px-30 md:pt-7.5'>
        {/* HEADER */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between'>
          {/* LEFT */}
          <div className='flex flex-col md:w-1/2'>
            <span className='text-primary-200 text-md font-medium uppercase md:text-lg'>
              SERVICE
            </span>
            <h2 className='text-neutral-25 text-display-md md:text-display-xl mt-2 leading-tight font-extrabold'>
              <span className='block'>MY SERVICE</span>
              <span className='block'>EXPERTISE</span>
            </h2>

            {/* MOBILE DESCRIPTION */}
            <div className='text-md mt-4 font-medium text-neutral-400 md:hidden'>
              Creating modern, intuitive, and visually consistent <br />
              web experiences that align with industry trends <br />
              and user expectations.
            </div>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className='hidden md:block md:max-w-120 md:pt-7.25 md:text-right'>
            <span className='text-xl leading-relaxed font-medium text-neutral-400'>
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </span>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className='mt-16 flex justify-center'>
          <div className='flex w-full flex-col items-center gap-6 md:max-w-300 md:flex-row md:justify-between md:gap-10'>
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
      </div>
    </section>
  );
};

export default ServiceSection;
