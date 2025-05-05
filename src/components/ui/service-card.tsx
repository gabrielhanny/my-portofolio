import Image from 'next/image';

interface ServiceCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({
  number,
  icon,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div
      className='flex w-full flex-col items-start px-4 pt-4 pb-6 md:h-[306px] md:min-w-0 md:flex-1 md:p-6'
      style={{ minHeight: '204px' }}
    >
      {/* Number */}
      <span className='text-md font-semibold text-neutral-400 md:text-xl'>
        {number}
      </span>
      {/* Border card*/}
      <div className='mt-4 mb-4 h-px w-full bg-neutral-600 md:mt-4 md:mb-6' />
      {/* Icon */}
      <Image
        src={icon}
        alt=''
        width={27}
        height={24}
        className='mb-4'
        priority
      />
      {/* Title */}
      <h3 className='text-neutral-25 mb-2 text-xl font-semibold md:text-lg'>
        {title}
      </h3>
      {/* Description */}
      <p className='text-md text-neutral-400 md:text-xl'>{description}</p>
    </div>
  );
};

export default ServiceCard;
