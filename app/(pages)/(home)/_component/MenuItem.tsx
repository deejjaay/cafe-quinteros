'use client';

import { Button } from '@radix-ui/themes'
import { useState } from 'react';
import { menus } from '../../../../public/assets/images';
import Image from "next/image";

const MenuItemPage = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = [
        { label: "All"},
        { label: "Desserts"},
        { label: "Hot Beverages"},
        { label: "Cold Drinks"},
        { label: "More snacks"},
    ];

    const filteredMenus = activeTab === "All" ? menus : menus.filter(menu => {
        return menu.category === activeTab;
    });

    return (
        <section className='md:py-custom-60 md:px-custom-40 py-custom-40 px-custom-16 bg-background_color lg:px-[120px]'>
            <div>
                <ul className='flex gap-[24px] overflow-x-auto whitespace-nowrap mb-[28px]'>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className={`text-montserrat_regular_20 ${activeTab === category.label 
                                ? 'border-b-4 border-primary opacity-100' 
                                : 'opacity-40'}`
                            }
                        >
                            <Button 
                                onClick={() => setActiveTab(category.label)
                            }>
                            {category.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="grid grid-cols-1 gap-[32px] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {filteredMenus.map((menu, index) => (
                        <li key={index} className="bg-white rounded-[16px] overflow-hidden shadow-lg">
                            <div className="flex flex-col lg:flex-col md:flex-row h-full gap-[16px]">
                            <Image
                                className="w-full lg:w-full md:w-[200px] h-auto rounded-t-lg lg:h-[182px] md:h-full"
                                src={menu.img}
                                alt={menu.eng_lable}
                            />
                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <h4 className="text-montserrat_bold_20 mb-5">{menu.label}</h4>
                                <h5 className="text-montserrat_regular_20 mb-5">{menu.eng_lable}</h5>
                                <p className="text-montserrat_regular_16 opacity-60 mb-7">
                                {menu.description}
                                </p>
                                <span className="text-primary text-montserrat_bold_20 mt-auto">
                                {menu.price}
                                </span>
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default MenuItemPage;
