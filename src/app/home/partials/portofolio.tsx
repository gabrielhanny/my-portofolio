import PortfolioCard from '@/components/ui/portofolio-card';

import portfolios from '@/constants/portofolio-data';

const PortfolioSection = () => (
  <section className='w-full bg-black px-4 pt-10 md:px-0 md:pt-30'>
    <div className='custom-container'>
      {/* Header */}
      <div className='mb-10 flex flex-col items-center justify-center text-center'>
        <span className='text-primary-200 text-md font-medium md:text-lg'>
          PORTFOLIO
        </span>
        <h2 className='text-neutral-25 mt-2 text-2xl font-extrabold md:text-5xl'>
          SELECTED WORK
        </h2>
      </div>
      {/* Cards */}
      <div className='flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-12'>
        {portfolios.map((item, i) => (
          <PortfolioCard
            key={i}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
