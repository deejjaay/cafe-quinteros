'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import CafeQuinteros from '../../../public/images/Cafe_Quinteros_Logo_landscape_white.png';
import Link from 'next/link';
import ContactUsModal from '@/app/_components/ContactUsModal';
import LanguageDropdown from './dorpdowns/Language';
import NavItems from './dorpdowns/NavItems';

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleLinkClick = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: "Home", href: '/' },
        { label: "About Us", href: '/about-us' },
        { label: "Visit Us", href: '/visit-us' },
    ];

    const filteredLinks = links.filter(link => link.label !== "Home");

    return (
        <div
            className={`sticky top-0 z-50 flex justify-between items-center py-[1.6rem] transition-all ${scrolled ? 'bg-white shadow-lg border-b-2 border-blue' : ''}`}
        >
            <div className="container flex items-center justify-between xl:max-w-xl">
                <div className="flex items-center gap-[1.6rem]">
                    <Link className="flex items-center gap-5" href="/">
                        <Image src={Logo} alt="Logo" width={48} height={48} />
                    </Link>
                    <Link href={'/'}>
                        <Image
                            src={CafeQuinteros}
                            alt="Cafe Quinteros"
                            width={172}
                            height={14}
                            className="hidden md:w-[17.2rem] md:h-[1.4rem] md:block xl:h-[1.4rem]"
                        />
                    </Link>
                </div>

                <nav className="md:flex items-center gap-[3.2rem]">
                    <div className="hidden lg:flex gap-[3.2rem]">
                        {filteredLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="text-lg text-montserrat_regular_16"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex gap-[1.6rem]">
                        <div className="flex items-center gap-[3.2rem]">
                            <LanguageDropdown />
                            <div className="hidden lg:flex">
                                <ContactUsModal buttonSize='nav' />
                            </div>
                        </div>

                        <div className="flex lg:hidden gap-[3.2rem]">
                            <NavItems
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                links={links}
                                handleLinkClick={handleLinkClick}
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
