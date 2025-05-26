import Image from 'next/image';

import faqs from '@/constants/faq-data';

const FAQSection = () => (
  <section className='w-full bg-black px-4 pt-10 md:px-0 md:pt-30'>
    <div className='custom-container'>
      {/* HEADER */}
      <div className='mb-10 flex flex-col items-center text-center'>
        <span className='text-primary-200 text-md font-medium md:text-lg'>
          FAQ
        </span>
        <h2 className='text-neutral-25 mt-2 text-3xl font-extrabold md:text-5xl'>
          <span className='block'>FREQUENTLY ASKED QUESTIONS</span>
        </h2>
      </div>
      {/* FAQ CARDS */}
      <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12'>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`flex items-start border-b border-neutral-800 py-6 md:border-0 md:py-8 ${
              idx % 2 === 0 ? 'md:border-r md:pr-8' : 'md:pl-8'
            } ${idx >= faqs.length - 2 ? 'border-b-0' : ''}`}
          >
            <div className='shrink-0 pt-1.5 md:pt-2'>
              <Image
                src='/icons/greenStar.svg'
                alt='star'
                width={32}
                height={32}
              />
            </div>
            <div className='pl-4'>
              <div className='text-neutral-25 mb-2 text-lg font-bold md:mb-6 md:text-xl'>
                {faq.question}
              </div>
              <div className='text-sm text-neutral-400 md:text-base'>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
