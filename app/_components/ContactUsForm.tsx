'use client';

import React from 'react'
import { useForm } from 'react-hook-form';
import z, { ZodError } from 'zod';

const schema = z.object({
    fullName: z.string().min(1, 'Please provide a valid full name'),
    whatsappNumber: z
      .string()
      .min(1, 'd')
      .regex(/^\+?\d{10,15}$/, 'Please provide a valid WhatsApp number'),
});
  
  interface FormData {
    fullName: string;
    whatsappNumber: string;
    message: string;
  }

const ContactUsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: async (data) => {
          try {
            schema.parse(data);
            return { values: data, errors: {} };
          } catch (err) {
            if (err instanceof ZodError) {
              return {
                values: {},
                errors: err.errors.reduce((acc: any, curr: any) => {
                  acc[curr.path[0]] = {
                    message: curr.message,
                  };
                  return acc;
                }, {}),
              };
            }
            throw err;
          }
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[32px] text-montserrat_regular_14 opacity-60">
                <p className="mb-[16px]">
                    Have questions or need help? Feel free to reach out to us. We’re
                    here to assist you and will reply within 24 hours!
                </p>
                <p>
                    For faster communication, you can contact us on WhatsApp using
                    this <span className='text-primary text-montserrat_bold_14'>+503 6925 6177</span>.
                </p>
            </div>

            <div className="flex flex-wrap gap-[16px] mb-[24px]">
                <div className='w-full flex flex-wrap'>
                    <input
                        type="text"
                        className="mt-1 w-full h-[48px] px-4 py-2 mb-[8px] border border-gray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Full name"
                        {...register('fullName')}
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                </div>

                <div className='w-full flex flex-wrap'>
                    <input
                        type="text"
                        className="mt-1 w-full h-[48px] px-4 py-2 mb-[8px] border border-gray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="WhatsApp number*"
                        {...register('whatsappNumber')}
                    />
                    {errors.whatsappNumber && <p className="text-red-500">{errors.whatsappNumber.message}</p>}
                </div>

                <textarea
                    className="w-full px-4 h-[140px] resize-none py-5 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help you?"
                    {...register('message')}
                />
            </div>

            <p className='mb-[32px] text-montserrat_regular_14 opacity-20'>By submitting this form, you agree to our <span>Privacy Policy</span> and <span>Site Terms</span></p>

            <button
                type="submit"
                className="w-full bg-primary text-white text-montserrat_bold_16 h-[52px] py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none"
            >
                Submit
            </button>
        </form>
    )
}

export default ContactUsForm