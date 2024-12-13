'use client';

import React, { useState } from 'react';
import Map from '../../../../public/images/map.png';
import Image from 'next/image';
import { z } from  'zod';
import { Input } from '@/app/_components/ui/input';

const JoinOurCommunityPage = () => {
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [error, setError] = useState('');

    const schema = z.object({
        whatsappNumber: z
            .string()
            .min(10, 'Please provide a valid WhatsApp number.')
            .regex(/^\d{10}$/, 'Invalid WhatsApp number, should be 10 digits')
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            schema.parse({ whatsappNumber });
            setError('');
            console.log('Form Submitted: ', { whatsappNumber });
            setWhatsappNumber('');
        } catch (err) {
            if (err instanceof z.ZodError) {
                setError(err.errors[0].message);
            }
        }
    };
    
    return (
        <section className="bg-cover bg-center bg-opacity-70 bg-[url('/images/discover/mobile/map.png')]">
            <div className='bg-brown opacity-90'>
                <div className='container xl:max-w-xl'>
                    <div className='gap-[8rem] py-[4rem] md:py-[6rem] md:flex-wrap grid xl:grid-cols-2'>
                        <div className="md:flex md:flex-wrap">
                            <div className="md:flex md:flex-wrap md:w-full mb-[4.8rem]">
                                <h6 className="w-full text-montserrat_bold_24 text-white mb-[1.6rem]">
                                    Join Our Cafe Community
                                </h6>
                                <p className="text-montserrat_regular_16 text-white opacity-60">
                                    Get daily breakfast and lunch specials! Please provide us your WhatsApp number.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="w-full flex flex-wrap items-start gap-[16px] md:flex-nowrap xl:items-end">
                                <div className="w-full flex flex-col md:flex-row gap-[1.6rem]">
                                    <div className="flex flex-col w-full">
                                        <Input
                                            className="h-[6.4rem] border-none focus:ring-0 pt-[1.77rem] pb-[1rem]"
                                            type="text"
                                            placeholder="WhatsApp number*"
                                            value={whatsappNumber}
                                            onChange={(e) => setWhatsappNumber(e.target.value)}
                                        />
                                        {error && <p className="text-[#c26057] text-base mt-[.5rem]">{error}</p>}
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full px-[1.6rem] h-[6.4rem] rounded-[.8rem] text-white bg-primary text-montserrat_bold_16_1 whitespace-nowrap md:w-auto"
                                    >
                                        Join Community
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="relative w-full group">
                            <Image 
                                src={Map} 
                                width={470} 
                                height={251}
                                alt={'Map'} 
                                className="w-full h-[41rem] object-cover rounded-[8px] md:h-[410px] xl:h-[251px]"
                            />
                            <p className="absolute bottom-0 left-0 w-full px-[.8rem] py-[1.8rem] text-montserrat_regular_12 bg-sub_text/50 text-bluish_white/60 p-2 group-hover:hidden">
                                We are conveniently located between Hospital Centro Pediátrico and UPED (Universidad Pedagógica de El Salvador)
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinOurCommunityPage;
