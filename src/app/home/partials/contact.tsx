'use client';

import emailjs from '@emailjs/browser';
import Image from 'next/image';
import React, { useState } from 'react';
import { z } from 'zod';

import SuccessDialog from '@/components/ui/successDialog';

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(100, 'Message must be at least 100 characters'),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = schema.safeParse(form);

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] || '',
        email: fieldErrors.email?.[0] || '',
        message: fieldErrors.message?.[0] || '',
      });
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSuccessOpen(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section
      id='ContactSection'
      className='w-full bg-black px-4 py-16 md:px-0 md:pt-30'
    >
      <div className='custom-container flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
        {/* LEFT */}
        <div className='relative mx-auto flex w-full max-w-[400px] flex-col items-center md:justify-between'>
          {/* IMAGE */}
          <div className='relative aspect-[3/4] w-full overflow-hidden rounded-xl'>
            <Image
              src='/images/contactImage.png'
              alt='Gabriel Hanny'
              fill
              priority
              className='object-cover brightness-[.25] contrast-[.85]'
            />
            <div className='absolute inset-0 z-10 bg-black/70 mix-blend-multiply' />
          </div>

          {/* SOCIAL + NAME (no absolute!) */}
          <div className='z-20 mt-6 flex flex-col items-center'>
            <div className='flex gap-4'>
              <div className='rounded-full bg-neutral-900 p-3'>
                <Image
                  src='/icons/dribble_logo.svg'
                  alt='Dribbble'
                  width={24}
                  height={24}
                />
              </div>
              <div className='rounded-full bg-neutral-900 p-3'>
                <Image
                  src='/icons/insta_logo.svg'
                  alt='Instagram'
                  width={24}
                  height={24}
                />
              </div>
              <div className='rounded-full bg-neutral-900 p-3'>
                <Image
                  src='/icons/linkin_logo.svg'
                  alt='LinkedIn'
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <p className='text-neutral-25 mt-2 font-bold'>Gabriel Hanny</p>
            <p className='flex items-center gap-2 text-sm text-neutral-400'>
              <span className='bg-primary-200 inline-block h-2.5 w-2.5 rounded-full shadow-md' />
              Available for Work
            </p>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className='flex w-full flex-col gap-6 md:w-1/2'>
          {/* HEADER */}
          <div className='mb-4 text-start md:mb-8'>
            <p className='text-primary-200 text-md font-medium md:text-lg'>
              CONTACT
            </p>
            <h2 className='text-neutral-25 display-md-extrabold md:display-2xl-extrabold'>
              LET’S GET IN TOUCH
            </h2>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div className='space-y-1'>
              <label htmlFor='name' className='font-semibold'>
                Name
              </label>
              <input
                type='text'
                name='name'
                placeholder='Your name'
                value={form.name}
                onChange={handleChange}
                className='w-full rounded-md border border-neutral-700 bg-black px-4 py-3'
              />
              {errors.name && (
                <p className='text-sm text-red-500'>{errors.name}</p>
              )}
            </div>

            <div className='space-y-1'>
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              <input
                type='email'
                name='email'
                placeholder='you@email.com'
                value={form.email}
                onChange={handleChange}
                className='w-full rounded-md border border-neutral-700 bg-black px-4 py-3'
              />
              {errors.email && (
                <p className='text-sm text-red-500'>{errors.email}</p>
              )}
            </div>

            <div className='space-y-1'>
              <label htmlFor='message' className='font-semibold'>
                Message
              </label>
              <textarea
                name='message'
                placeholder='Write your message...'
                value={form.message}
                onChange={handleChange}
                rows={5}
                className='w-full rounded-md border border-neutral-700 bg-black px-4 py-3'
              />
              {errors.message && (
                <p className='text-sm text-red-500'>{errors.message}</p>
              )}
            </div>

            <button
              type='submit'
              className='bg-primary-200 mt-4 w-full rounded-full px-8 py-4 font-bold text-neutral-950 shadow-[0_0_32px_#91ff02] hover:shadow-[0_0_56px_#91ff02]'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
    </section>
  );
};

export default ContactSection;
