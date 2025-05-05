import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  position: string;
  logo: string;
  logoAlt: string;
  testimonial: string;
  color: string;
}

const TestimonialCard = ({
  name,
  position,
  logo,
  logoAlt,
  testimonial,
  color,
}: TestimonialCardProps) => {
  return (
    <div className='relative flex h-full w-full flex-col rounded-xl border border-neutral-700 bg-black px-6 py-6 md:px-8 md:py-10'>
      {/* Logo kanan atas */}
      <div className={`absolute top-6 right-6 md:top-8 md:right-8 ${color}`}>
        <Image
          src={logo}
          alt={logoAlt}
          width={114}
          height={48}
          className='hidden md:block'
        />
        <Image
          src={logo}
          alt={logoAlt}
          width={76}
          height={32}
          className='md:hidden'
        />
      </div>
      {/* Nama dan posisi */}
      <div className='text-neutral-25 mb-1 text-xl font-bold md:text-2xl'>
        {name}
      </div>
      <div className='text-md mb-3 text-neutral-400 md:text-lg'>{position}</div>
      {/* Bintang */}
      <div className='mb-4 flex gap-1'>
        {[...Array(5)].map((_, i) => (
          <Image
            src='/icons/starIcon.svg'
            alt='star'
            width={24}
            height={24}
            key={i}
          />
        ))}
      </div>
      {/* Testimoni */}
      <div className='text-md text-neutral-25 font-medium md:text-lg'>
        {testimonial}
      </div>
    </div>
  );
};

export default TestimonialCard;
