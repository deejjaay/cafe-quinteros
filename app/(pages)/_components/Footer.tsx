import React from 'react'
import Image from 'next/image';
import  Logo  from '../../../public/images/logo.png';
import Armada from '../../../public/images/armada.png';
import  WhatsApp from '../../../public/images/discover/mobile/whatsapp.png';
import  Facebook from '../../../public/images/discover/mobile/facebook.png';
import  Instagram from '../../../public/images/discover/mobile/instagram.png';
import  CafeQuinteros from '../../../public/images/Cafe_Quinteros_Logo_landscape_white.png';
import Link from 'next/link';

const Footer = () => {
    const socmeds = [
        {img: WhatsApp, alt: "WhatsApp", href: "/"},
        {img: Facebook, alt: "Facebook", href: "/"},
        {img: Instagram, alt: "Instagram", href: "/"},
    ];

    return (
        <footer className='md:py-custom-60 py-custom-40 bg-gray '>
            <div className='container xl:max-w-xl'>
                <div className='flex items-center justify-center mb-[2.4rem] border-b-2 border-b-blue pb-[2.4rem]'>
                    <Link href={'/'}>
                        <Image 
                            src={Logo} 
                            alt={'Logo'} 
                            width={108} 
                            height={108} 
                            className='mr-5'
                        />
                    </Link>

                    <Link href={'/'}>
                        <Image 
                            src={CafeQuinteros} 
                            alt={'Cafe Quinteros'} 
                            width={540} 
                            height={42.7} 
                            className='w-[28.28rem] h-[2.2rem] mr-5 sm:w-[28.28rem] sm:h-[2.2rem] md:w-[54rem] md:h-[4.27rem]' 
                        />
                    </Link>
                </div>

                <ul className='flex-wrap gap-[3.2rem] grid md:grid-cols-3 lg:grid-cols-3'>
                    <li className='flex w-full flex-wrap'>
                        <h6 className='w-full text-montserrat_bold_18 opacity-60 mb-[1.6rem]'>Contact Us</h6>
                        <span className='w-full text-montserrat_regular_16 opacity-60 mb-[1.6rem]'>+503-6925-6177</span>

                        <ul className='flex w-full mb-[3.2rem]'>
                            {socmeds.map((socmed, index) => (
                                <li key={index}>
                                    <Link href={socmed.href}>
                                        <Image 
                                            src={socmed.img} 
                                            alt={socmed.alt} 
                                            width={20} 
                                            height={20} 
                                            className='mr-[3.2rem]' 
                                        />
                                    </Link>
                                </li>
                            ))};
                        </ul>

                        <span className='w-full text-montserrat_regular_16 opacity-60 mt-[auto]'>© 2024 Café Quinteros</span>
                    </li>

                    <li className='w-full'>
                        <span className='flex w-full text-montserrat_bold_18 opacity-60 mb-[1.6rem]'>About Us</span>
                        <span className='w-full text-montserrat_regular_16 opacity-60'>About Café Quinteros</span>
                    </li>

                    <li className='flex w-full flex-wrap mt-[auto] gap-[4.8rem]'>
                        <div className='md:mb-[2.38rem]'>
                            <h6 className='flex w-full text-montserrat_bold_18 opacity-60 mb-[1.6rem]'>Visit Café Quinteros</h6>
                            <p className='w-full text-montserrat_regular_16 opacity-60'>Colonia Medica, Pasaje Llort #120, San Salvador, El Salvador</p>
                        </div>

                        <div className='flex w-full flex-wrap md:flex-nowrap items-center whitespace-nowrap gap-[1.6rem] xl:justify-end'>
                            <span className='text-montserrat_regular_16 opacity-30'>Developed by</span>
                            <Link href={'/'}>
                                <Image src={Armada} alt={'Armada Logo'} width={176.33} height={40} />
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer