import React from 'react';
import Image from 'next/image';
import Menu from '../../../../public/images/menu.png';
import Link from 'next/link';
import ContactUsModal from '@/app/_components/ContactUsModal';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../(home)/_components/ui/Dropdown';

interface NavItemsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { label: string; href: string }[];
  handleLinkClick: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({ isOpen, setIsOpen, links, handleLinkClick }) => {
    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger>
                <Image src={Menu} alt="Burger Menu Icon" className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-none rounded-[.8rem] p-[1.6rem]">
                {links.map((link, index) => (
                    <DropdownMenuItem key={index} className="mb-[3.2rem]">
                        <Link
                            href={link.href}
                            className="w-full first-line:text-montserrat_regular_16 text-sub_text/60"
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
                <ContactUsModal />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavItems;
