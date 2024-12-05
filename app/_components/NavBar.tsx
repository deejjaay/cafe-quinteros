/* eslint-disable react/jsx-key */
'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from '../../public/images/logo.png';
import Dropdown from '../../public/images/nav_dropdown.png';
import Menu from '../../public/images/menu.png';
import { FaCaretDown } from "react-icons/fa";
import { Button, DropdownMenu } from '@radix-ui/themes';
import Link from 'next/link';
import CafeQuinteros from '../../public/images/Cafe_Quinteros_Logo_landscape_white.png';
import ContactUsModal from './ContactUsModal';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        {label: "Home", href: '/'},
        {label: "About Us", href: '/about'},
        {label: "Visit Us", href: '/visit'},
    ];

    return (
        <div
            className={`sticky top-0 z-50 flex justify-between items-center py-[1.6rem] transition-all ${scrolled ? 'bg-white shadow-lg border-b-2 border-blue' : ''}`}
        >
            <div className='container flex justify-between xl:max-w-xl'>
                <div className='flex items-center xl:gap-[1.6rem]'>
                    <Link className="flex items-center gap-5" href="/">
                        <Image src={Logo} alt="Logo" width={48} height={48} />
                    </Link>
                    <Link href={'/'}>
                        <Image 
                            src={CafeQuinteros} 
                            alt="Cafe Quinteros" 
                            width={172} 
                            height={14} 
                            className="hidden md:w-[172px] md:h-[14px] md:block xl:h-[1.4rem]" 
                        />
                    </Link>
                </div>

                <nav className="md:flex items-center gap-[32px]">
                    <div className="hidden lg:flex gap-[32px]">
                        <Link href="/about" className="text-lg text-montserrat_regular_16">About Us</Link>
                        <Link href="/visit" className="text-lg text-montserrat_regular_16">Visit Us</Link>
                    </div>

                    <div className="flex gap-[16px]">
                        <div className="md:flex items-center gap-[32px]">
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button className="flex items-center">
                                        <Image src={Dropdown} alt="Dropdown" />
                                        <FaCaretDown />
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Item>Philippines</DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                            
                            <div className='hidden lg:flex'>
                                <ContactUsModal buttonSize='nav'/>
                            </div>
                        </div>

                        <div className="flex lg:hidden gap-[3.2rem]">
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Image src={Menu} alt="Burger Menu Icon" className="cursor-pointer" />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content className="flex flex-wrap rounded-[8px] bg-white p-5 z-50">
                                    {links.map((link, index) => 
                                        <DropdownMenu.Item className='mb-[32px]'>
                                            <Link key={index} href={link.href} className='text-montserrat_regular_16 opacity-60'>{link.label}</Link>
                                        </DropdownMenu.Item>
                                    )}
                                    <ContactUsModal />
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
