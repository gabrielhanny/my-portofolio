import Image from 'next/image';

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
}

const PortfolioCard = ({ image, title, description }: PortfolioCardProps) => (
  <div className='w-full max-w-[361px] overflow-hidden rounded-2xl bg-neutral-950 shadow-lg md:max-w-[381px]'>
    <div className='relative h-[270px] w-full md:h-[284px]'>
      <Image
        src={image}
        alt={title}
        fill
        className='rounded-t-2xl object-cover'
        sizes='(max-width: 768px) 361px, 381px'
      />
    </div>
    <div className='px-5 py-4'>
      <h3 className='text-neutral-25 mb-2 text-xl font-bold md:text-[1.375rem]'>
        {title}
      </h3>
      <p className='text-sm text-neutral-400 md:text-base'>{description}</p>
    </div>
  </div>
);

export default PortfolioCard;
