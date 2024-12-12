'use client';

import { useEffect, useState } from 'react';
import { menus } from '../../../../public/assets/images';
import Image from "next/image";

const MenuItemPage = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const stickyPoint = 0;
            if (window.scrollY >= stickyPoint) {
                setIsSticky(true);
            } 
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
    }, []);

    const categories = [
        { label: "All" },
        { label: "Desserts" },
        { label: "Hot Beverages" },
        { label: "Cold Drinks" },
        { label: "More snacks" },
    ];

    const filteredMenus = activeTab === "All" ? menus : menus.filter(menu => {
        return menu.category === activeTab;
    });

    return (
        <>
            <div className="relative min-h-screen">
                <div className={`p-[.5rem] sticky top-[80px] z-10 bg-gray scrollbar-hide ${isSticky ? 'mb-[3.2rem]' : 'mb-[1.5rem]'}`}>
                    <ul className={`flex gap-[2.4rem] overflow-x-auto whitespace-nowrap`}>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className={`text-montserrat_regular_20 hover:opacity-100 ${activeTab === category.label 
                                    ? 'border-b-4 border-primary opacity-100' 
                                    : 'opacity-40'}`}
                            >
                                <button 
                                    onClick={() => setActiveTab(category.label)}
                                >
                                    {category.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="grid grid-cols-1 gap-[3.2rem] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {filteredMenus.map((menu, index) => (
                        <li key={index} className="bg-bluish_white rounded-[1.6rem] overflow-hidden shadow-lg">
                            <div className="flex flex-col h-full md:flex-row lg:flex-col">
                                <Image
                                    className="w-auto h-[18.2rem] object-cover md:w-[20rem] md:h-full md:object-fill rounded-t-lg lg:w-full lg:h-[18.2rem] lg:object-cover"
                                    src={menu.img}
                                    alt={menu.eng_name || 'Default alt text'}
                                    width={830}
                                    height={623}
                                />
                                <div className="p-[1.6rem] flex flex-col justify-between flex-grow">
                                    <h4 className="text-montserrat_bold_20 mb-5">{menu.name}</h4>
                                    <h5 className="text-montserrat_regular_20 mb-5">{menu.eng_name}</h5>
                                    <p className="text-montserrat_regular_16 opacity-60 mb-7">{menu.description}</p>
                                    <span className="text-primary text-montserrat_bold_20 mt-auto">{menu.price}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MenuItemPage;