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
import ContactUsModal from '../_components/ContactUsModal';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

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
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center p-custom-16 transition-all lg:px-[120px] ${scrolled ? 'bg-white shadow-lg' : ''}`}
    >
      <Link className="flex items-center gap-5" href="/">
        <Image src={Logo} alt="Logo" width={48} height={48} />
        <Image 
          src={CafeQuinteros} 
          alt="Cafe Quinteros" 
          width={172} 
          height={14} 
          className="md:w-[172px] md:h-[14px] hidden md:block" 
        />
      </Link>

      <div className="md:flex items-center gap-[32px]">
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

            <Button onClick={() => setIsOpen(true)} className="hidden text-lg lg:flex bg-primary text-montserrat_bold_16 text-white py-[14px] px-[23.5px] rounded-[8px] cursor-pointer">
              Contact Us
            </Button>
            <ContactUsModal isOpen={isOpen} onClose={handleModalClose} />
          </div>

          <div className="flex lg:hidden gap-[32px]">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Image src={Menu} alt="Burger Menu Icon" className="cursor-pointer" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="flex flex-wrap rounded-[8px] bg-white p-5 z-50">
                {links.map(link => 
                  <DropdownMenu.Item className='mb-[32px]'>
                    <Link href={link.href} className='text-montserrat_regular_16 opacity-60'>{link.label}</Link>
                  </DropdownMenu.Item>
                )}
                <DropdownMenu.Item>
                  <Button onClick={() => setIsOpen(true)} className="text-lg bg-primary w-[180px] h-[64px] text-montserrat_bold_16 text-white py-[14px] px-[23.5px] rounded-[8px] cursor-pointer">
                    Contact Us
                  </Button>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
