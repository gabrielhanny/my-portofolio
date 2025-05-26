'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, A)', 'rgba(0, 0, 0, 0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-80 w-full'
    >
      <div className='flex-between custom-container h-20'>
        {/* KIRI: Garis + Nama */}
        {/* Logo Area */}
        {/* DESKTOP */}
        <div className='hidden items-center gap-4 lg:flex'>
          {/* GARIS */}
          <div className='h-px rounded bg-white md:w-[40px]' />
          <Image
            src='/images/Label.svg'
            alt='Gabriel Hanny'
            width={135}
            height={34}
          />
        </div>

        {/* MOBILE */}
        {!isOpen && (
          <div className='flex items-center gap-4 lg:hidden'>
            <div className='h-px w-[24px] rounded bg-white' />
            <Image
              src='/images/Label.svg'
              alt='Gabriel Hanny'
              width={110}
              height={30}
              className='h-7.5 w-32'
            />
          </div>
        )}

        {/* NAV MENU DESKTOP */}
        <nav className='hidden lg:block'>
          <ul className='flex gap-12'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='text-md hover:text-primary-200 p-2 text-white'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* HAMBURGER + SHEET */}
        <div className='block lg:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* Trigger: hanya tampil kalau sheet BELUM terbuka */}
            {!isOpen && (
              <Image
                src='/icons/Icon.svg'
                alt='Hamburger'
                width={24}
                height={24}
                onClick={() => setIsOpen(true)}
                className='cursor-pointer'
              />
            )}

            {/* SheetContent FULLSCREEN */}
            <SheetContent
              side='left'
              className='h-screen w-screen max-w-none bg-black px-6 pt-6 text-white'
            >
              <SheetHeader>
                <SheetTitle className='flex items-center gap-4'>
                  <Image
                    src='/images/Label.svg'
                    alt='Gabriel Hanny'
                    width={135}
                    height={34}
                    className='h-7.5 w-32'
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className='mt-10'>
                <ul className='flex flex-col gap-8'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link
                          href={data.href}
                          className='text-md hover:text-primary-200 text-white'
                          onClick={() => setIsOpen(false)}
                        >
                          {data.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
