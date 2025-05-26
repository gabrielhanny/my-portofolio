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
    <div className='flex w-full flex-col items-start p-6 md:h-[306px] md:w-[373.33px]'>
      {/* Number */}
      <span className='text-md font-semibold text-neutral-400 md:text-xl'>
        {number}
      </span>

      {/* Border */}
      <div className='mt-4 h-px w-full bg-neutral-600' />

      {/* Spacer 24px */}
      <div className='h-6' />

      {/* Icon */}
      <Image
        src={icon}
        alt='icon'
        width={27}
        height={24}
        className='mb-4'
        priority
      />

      {/* Title */}
      <h3 className='text-neutral-25 md:display-sm-semibold mb-2 text-xl font-semibold'>
        {title}
      </h3>

      {/* Description */}
      <p className='text-md text-neutral-400 md:text-xl'>{description}</p>
    </div>
  );
};

export default ServiceCard;
