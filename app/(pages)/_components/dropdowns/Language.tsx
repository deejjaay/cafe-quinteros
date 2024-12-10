'use client';

import { useState } from 'react';
import Image from 'next/image';
import Spanish from '../../../../public/images/spanish-flag.png';
import US from '../../../../public/images/us-flag.png';
import French from '../../../../public/images/french-flag.png';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../_components/ui/Dropdown';
import { FaCaretDown } from 'react-icons/fa';

type Language = 'Spanish' | 'English' | 'French';

const LanguageDropdown = () => {
    const [activeLanguage, setActiveLanguage] = useState<Language>('Spanish');

    const languages =[
        {language: "Spanish", img: Spanish, alt: 'Spanish'},
        {language: "English", img: US, alt: 'English'},
        {language: "French", img: French, alt: 'French'},
    ];

    const handleLanguageChange = (language: Language) => {
        setActiveLanguage(language);
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-end outline-none'>
                {activeLanguage === 'Spanish' && <Image src={Spanish} alt="Spanish" />}
                {activeLanguage === 'English' && <Image src={US} alt="English" />}
                {activeLanguage === 'French' && <Image src={French} alt="French" />}
                <FaCaretDown className='text-blue' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white border-none rounded-[.8rem] p-[.8rem]'>
                {languages.map((lang, index) =>
                    <DropdownMenuItem
                        key={index} 
                        className={`!text-montserrat_regular_16
                                ${activeLanguage === lang.language ? 'opacity-100' : 'opacity-60'} 
                                ${index !== languages.length - 1 ? 'mb-[1.6rem]' : ''}
                            `}
                        onClick={() => handleLanguageChange(lang.language as Language)}
                    >
                        <Image 
                            src={lang.img} 
                            alt={lang.alt}
                            className='mr-[.8rem]' 
                        />
                        {lang.language}
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageDropdown