'use client';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50',
  {
    // variants: {
    //   variant: {
    //     default:
    //       'bg-primary-200 text-md-bold text-neutral-950 rounded-full hover:shadow-[0_0_17px_rgba(145, 255, 2, 0.6)]',
    //     outline:
    //       'border border-neutral-800 rounded-full hover:border-neutral-700',
    //   },
    //   size: {
    //     default: 'h-14 px-29.5',
    //     icon: 'size-12 md:size-14',
    //   },
    // },
    // defaultVariants: {
    //   variant: 'default',
    //   size: 'default',
    // },
    //CUSTOM BUTTONKU//
    variants: {
      variant: {
        default:
          'bg-primary-200 text-md font-bold text-neutral-950 rounded-full hover:shadow-[0_0_17px_rgba(145,255,2,0.6)]',
        outline:
          'border border-neutral-800 rounded-full hover:border-neutral-700',
      },
      size: {
        hero: 'h-12 px-38 md:h-14 md:px-23.375',
        why: 'h-12 px-38 md:h-14 md:px-21.875',
        contact: 'h-12 px-33r md:h-14 md:px-66.25',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'hero',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
