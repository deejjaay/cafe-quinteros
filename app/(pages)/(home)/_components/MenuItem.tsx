'use client';

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
        <>
            <ul className='flex gap-[24px] overflow-x-auto whitespace-nowrap mb-[28px] scrollbar-hide'>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`text-montserrat_regular_20 ${activeTab === category.label 
                            ? 'border-b-4 border-primary opacity-100' 
                            : 'opacity-40'}`
                        }
                    >
                        <button 
                            onClick={() => setActiveTab(category.label)}
                        >
                            {category.label}
                        </button>
                    </li>
                ))}
            </ul>

            <ul className="grid grid-cols-1 gap-[32px] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {filteredMenus.map((menu, index) => (
                    <li key={index} className="bg-white rounded-[16px] overflow-hidden shadow-lg">
                        <div className="flex flex-col lg:flex-col md:flex-row h-full gap-[16px]">
                            <Image
                                className="w-auto h-[18.2rem] object-cover md:w-[20rem] md:h-full md:object-fill rounded-t-lg lg:w-full lg:h-[18.2rem] lg:object-cover"
                                src={menu.img}
                                alt={menu.eng_name}
                            />
                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <h4 className="text-montserrat_bold_20 mb-5">{menu.name}</h4>
                                <h5 className="text-montserrat_regular_20 mb-5">{menu.eng_name}</h5>
                                <p className="text-montserrat_regular_16 opacity-60 mb-7">{menu.description}</p>
                                <span className="text-primary text-montserrat_bold_20 mt-auto">{menu.price}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MenuItemPage;
