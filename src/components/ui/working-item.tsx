import Image from 'next/image';

interface WorkingItemProps {
  text: string;
  muted?: boolean; // tambahkan prop muted
}

const WorkingItem = ({ text, muted = false }: WorkingItemProps) => (
  <div className='flex items-center gap-3 border-b border-neutral-800 py-3 last:border-none'>
    <Image
      src='/icons/greenStar.svg'
      alt='icon'
      width={18}
      height={18}
      className={muted ? 'opacity-60' : ''}
    />
    <span className={muted ? 'text-neutral-400' : 'text-neutral-25'}>
      {text}
    </span>
  </div>
);

export default WorkingItem;
