'use client';
import React from 'react';

import { cn } from '@/lib/utils';

type CornerAccentProps = {
  className?: string;
};

const boxSizeMobile = 34.5;
const boxSizeDesktop = 46;

const CornerAccent: React.FC<CornerAccentProps> = ({ className }) => {
  return (
    <div
      className={cn('relative', className)}
      style={{
        width: `calc(${boxSizeMobile * 2.5}px)`,
        height: `calc(${boxSizeMobile * 2.2}px)`,
      }}
    >
      {/* Kotak 2 (Atas Tengah) */}
      <div
        className='absolute z-10'
        style={{
          left: `calc(${boxSizeMobile}px)`,
          top: 0,
          width: `${boxSizeMobile}px`,
          height: `${boxSizeMobile}px`,
          borderRadius: '6px',
          background: 'var(--color-primary-400, #1D3300)',
        }}
      />
      {/* Kotak 1 (Bawah Kiri) */}
      <div
        className='absolute z-10'
        style={{
          left: 0,
          top: `${boxSizeMobile}px`,
          width: `${boxSizeMobile}px`,
          height: `${boxSizeMobile}px`,
          borderRadius: '6px',
          background: 'var(--color-primary-400, #1D3300)',
        }}
      />
      {/* Kotak 3 (Bawah Kanan) */}
      <div
        className='absolute z-10'
        style={{
          left: `${boxSizeMobile * 2}px`,
          top: `${boxSizeMobile}px`,
          width: `${boxSizeMobile}px`,
          height: `${boxSizeMobile}px`,
          borderRadius: '6px',
          background: 'var(--color-primary-400, #1D3300)',
        }}
      />
      {/* Responsive untuk desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          div[role='corner-accent'] > div {
            width: ${boxSizeDesktop}px !important;
            height: ${boxSizeDesktop}px !important;
            border-radius: 12px !important;
          }
          div[role='corner-accent'] {
            width: ${boxSizeDesktop * 2.5}px !important;
            height: ${boxSizeDesktop * 2.2}px !important;
          }
          div[role='corner-accent'] > div:nth-child(1) {
            left: ${boxSizeDesktop}px !important;
            top: 0 !important;
          }
          div[role='corner-accent'] > div:nth-child(2) {
            left: 0 !important;
            top: ${boxSizeDesktop}px !important;
          }
          div[role='corner-accent'] > div:nth-child(3) {
            left: ${boxSizeDesktop * 2}px !important;
            top: ${boxSizeDesktop}px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CornerAccent;
