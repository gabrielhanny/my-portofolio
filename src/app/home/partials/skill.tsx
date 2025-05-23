//FRAMER MOTION BELUM BISA//
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import React from 'react';

// import { skillsIcon, skillBars } from '@/constants/skill-data';

// function SkillBar({ name, value }: { name: string; value: number }) {
//   return (
//     <div className='mb-4 flex w-full items-center gap-6'>
//       <div className='relative h-12 flex-1 overflow-hidden rounded-xl'>
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: `${value}%` }}
//           transition={{ duration: 1.2, ease: 'easeOut' }}
//           className='absolute top-0 left-0 h-12 rounded-xl'
//           style={{
//             background:
//               'repeating-linear-gradient(135deg, #497A1A, #497A1A 8px, #5c941f 8px, #5c941f 16px)',
//           }}
//         />
//         <div className='text-neutral-25 relative z-10 flex h-12 items-center pl-6 font-semibold'>
//           {name}
//         </div>
//       </div>
//       <span className='text-neutral-25 w-12 text-right font-semibold'>
//         {value}%
//       </span>
//     </div>
//   );
// }

// const SkillSection = () => {
//   return (
//     <section className='mt-[49px] min-h-[660px] w-full bg-black md:mt-2'>
//       <div className='custom-container px-4.5 pt-10 md:px-30 md:pt-20'>
//         <div className='flex flex-col md:flex-row md:items-start md:gap-[58px]'>
//           {/* LEFT: Title + Icon */}
//           <div className='md:w-1/2 md:max-w-[524px]'>
//             <span className='text-primary-200 text-md font-medium md:text-lg'>
//               SKILLS
//             </span>
//             <h2 className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold mb-8'>
//               <span className='block'>SKILLS THAT BRING</span>
//               <span className='block'>IDEAS TO LIFE</span>
//             </h2>

//             {/* ICON GRID */}
//             <div className='grid grid-cols-4 justify-items-center gap-x-4 gap-y-6 md:w-[440px] md:grid-cols-4 md:grid-rows-2 md:gap-x-8 md:gap-y-8'>
//               {skillsIcon.map((item) => (
//                 <div
//                   key={item.name}
//                   className='relative flex h-12 w-12 items-center justify-center rounded-full bg-[#111] md:h-16 md:w-16'
//                 >
//                   <Image
//                     src={item.icon}
//                     fill
//                     alt={item.name}
//                     className='object-contain p-1'
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: SkillBar */}
//           <div className='mt-10 w-full md:mt-0 md:w-1/2 md:max-w-[602px]'>
//             {skillBars.map((item) => (
//               <SkillBar
//                 key={item.name + item.value}
//                 name={item.name}
//                 value={item.value}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillSection;

import Image from 'next/image';
import React from 'react';

import { skillsIcon, skillBars } from '@/constants/skill-data';

function SkillBar({ name, value }: { name: string; value: number }) {
  return (
    <div className='mb-4 flex w-full items-center gap-6'>
      <div className='relative h-12 flex-1 overflow-hidden rounded-xl'>
        <div
          className='absolute top-0 left-0 h-12 rounded-xl'
          style={{
            width: `${value}%`,
            background:
              'repeating-linear-gradient(135deg, #497A1A, #497A1A 8px, #5c941f 8px, #5c941f 16px)',
          }}
        />
        <div className='text-neutral-25 relative z-10 flex h-12 items-center pl-6 font-semibold'>
          {name}
        </div>
      </div>
      <span className='text-neutral-25 w-12 text-right font-semibold'>
        {value}%
      </span>
    </div>
  );
}

const SkillSection = () => {
  return (
    <section className='mt-12.375 w-full bg-black md:mt-20.75'>
      <div className='custom-container px-4.5 pt-10 md:px-30 md:pt-20'>
        <div className='flex flex-col md:flex-row md:items-start md:gap-14.5'>
          {/* LEFT: Title + Icon */}
          <div className='gap-7.6 flex flex-col md:w-1/2 md:max-w-131'>
            {/* Header */}
            <div>
              <span className='text-primary-200 text-md font-medium md:text-lg'>
                SKILLS
              </span>
              <h2 className='text-neutral-25 text-[28px] leading-[36px] font-extrabold md:text-[40px] md:leading-[48px]'>
                <span className='block'>SKILLS THAT BRING</span>
                <span className='block'>IDEAS TO LIFE</span>
              </h2>
            </div>

            {/* ICON GRID */}
            <div className='mt-14.5 grid w-full max-w-110 grid-cols-4 items-start gap-x-8 gap-y-8'>
              {skillsIcon.map((item) => (
                <div
                  key={item.name}
                  className='relative flex h-[51px] w-[51px] items-center justify-center rounded-full bg-[#111]'
                >
                  <Image
                    src={item.icon}
                    fill
                    alt={item.name}
                    className='object-contain p-1'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Skill Bars */}
          <div className='mt-10 w-full md:mt-0 md:w-1/2 md:max-w-150.5'>
            {skillBars.map((item) => (
              <SkillBar key={item.name} name={item.name} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
