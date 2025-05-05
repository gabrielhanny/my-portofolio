// // SuccessDialog.tsx
// 'use client';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent } from '@/components/ui/dialog';

// interface SuccessDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const SuccessDialog: React.FC<SuccessDialogProps> = ({
//   open,
//   onOpenChange,
// }) => {
//   const router = useRouter();

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent
//         className='z-50 flex max-w-[361px] flex-col items-center justify-center rounded-[16px] border border-neutral-800 bg-black p-6 text-center shadow-[0_0_32px_#91ff02] sm:max-w-[479px] sm:p-10'
//         style={{ width: '100%', height: 'auto' }}
//         role='alertdialog'
//         aria-label='Success message sent'
//       >
//         <div className='relative mb-6 h-[110px] w-[119.39px] sm:h-[136px] sm:w-[147.61px]'>
//           <Image
//             src='/icons/successDesktop.svg'
//             alt='Success'
//             fill
//             className='object-contain'
//           />
//         </div>
//         <h2 className='text-neutral-25 mb-2 text-lg font-bold sm:text-xl'>
//           Message Sent Successfully!
//         </h2>
//         <p className='sm:text-md mb-6 text-sm text-neutral-400'>
//           Thank you for reaching out. I’ll get back to you as soon as possible
//         </p>

//         <Button
//           size='hero'
//           className='mx-auto w-full max-w-[240px] text-sm font-bold text-neutral-950 sm:text-base'
//           onClick={() => router.push('/')}
//         >
//           BACK TO HOME
//         </Button>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default SuccessDialog;
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='fixed top-1/2 left-1/2 z-50 flex w-full max-w-[361px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-visible rounded-[16px] border border-neutral-800 bg-black p-6 text-center shadow-[0_0_32px_#91ff02] sm:max-w-[479px] sm:p-10'
        role='alertdialog'
        aria-label='Success message sent'
      >
        {/* ICON SUCCESS - setengah di luar box */}
        <div className='absolute -top-[56px] left-1/2 z-50 h-[110px] w-[119px] -translate-x-1/2 sm:-top-[68px] sm:h-[136px] sm:w-[148px]'>
          <Image
            src='/icons/successDesktop.svg'
            alt='Success'
            fill
            className='object-contain'
          />
        </div>

        {/* TEXT */}
        <h2 className='text-neutral-25 mt-[70px] mb-2 text-lg font-bold sm:text-xl'>
          Message Sent Successfully!
        </h2>
        <p className='sm:text-md mb-6 text-sm text-neutral-400'>
          Thank you for reaching out. I’ll get back to you as soon as possible
        </p>

        {/* BUTTON */}
        <Button
          onClick={() => router.push('/')}
          className='bg-primary-200 flex w-full max-w-[313px] items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-neutral-950 shadow-[0_0_32px_#91ff02] hover:shadow-[0_0_56px_#91ff02] sm:max-w-[361px]'
        >
          BACK TO HOME
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
