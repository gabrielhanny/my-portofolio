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
    <div className='flex w-full max-w-93.25 flex-col items-start pt-4 pb-6 text-left md:h-76.5 md:p-6'>
      {/* Nomor */}
      <span className='text-md font-semibold text-neutral-400 md:text-xl'>
        {number}
      </span>

      {/* Garis bawah */}
      <div className='mt-4 mb-4 h-px w-full bg-neutral-600' />

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
      <h3 className='text-neutral-25 mb-2 text-xl leading-snug font-semibold'>
        {title}
      </h3>

      {/* Description */}
      <p className='text-md leading-relaxed text-neutral-400'>{description}</p>
    </div>
  );
};

export default ServiceCard;
