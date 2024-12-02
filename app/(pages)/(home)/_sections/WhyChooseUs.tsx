'use client';

import React, { useState } from 'react'
import Authentic from '../../../../public/images/discover/mobile/authentic.png'
import Locally from '../../../../public/images/discover/mobile/locally.png'
import Community from '../../../../public/images/discover/mobile/community.png'
import Image from 'next/image';
import { Button } from '@radix-ui/themes';
import ContactUsModal from '@/app/_components/ContactUsModal';

const WhyChooseUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };
  
  const listItems = [
    {
      img: Authentic,
      label: 'Authentic Experience',
      description: 'Enjoy authentic El Salvadoran flavors served in a warm and inviting setting.'
    },
    {
      img: Locally,
      label: 'Locally Sourced & FreshLocally Sourced & Fresh',
      description: 'We use the freshest ingredients from local farms, ensuring quality in every bite.'
    },
    {
      img: Community,
      label: 'Community Focus',
      description: 'We care about our community, providing high-quality, affordable products and supports local farmers.'
    }
  ];

  return (
    <section className='md:py-custom-60 md:px-custom-40 py-custom-40 px-custom-16 bg-white lg:px-[120px]'>
      <div className='mb-[48px]'>
        <h6 className='text-montserrat_bold_28 mb:text-montserrat_bold_40 lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-[16px] lg:text-center'>Why Choose Café Quinteros</h6>
        <p className='text-montserrat_regular_16 opacity-60 lg:text-center'>Taste El Salvador's regional and local breakfast & lunch in a place that's more than just a coffee shop.</p>
      </div>

      <ul className="grid grid-cols-1 gap-[32px] md:grid-cols-1 lg:grid-cols-3">
        {listItems.map(item => <li className='bg-gray gap-[32px] p-[24px] rounded-[16px] mb-[32px]'>
          <div className='flex flex-col lg:flex-col md:flex-row'>
            <Image 
              src={item.img} 
              alt={item.label} 
              width={81.4} 
              height={80} 
              className='pr-[24px] mb-[24px] md:mb-0 lg:mb-[24px]'
            />
            <div className='md:pl-[24px] lg:ml-auto md:border-l-2 border-solid border-blue lg:border-none lg:p-0'>
              <span className='text-montserrat_bold_20 mb-[24px]'>{item.label}</span>
              <p className='text-montserrat_regular_18 opacity-60 lg:mt-[24px]'>{item.description}</p>
            </div>
          </div>
        </li>)}
      </ul>

      <div className='flex justify-center lg:justify-center'>
        <Button 
         className='bg-primary text-montserrat_bold_16 text-white w-full md:text-center md:w-[240px] rounded-[8px] h-[64px]'
         onClick={() => setIsOpen(true)}
        >
          Contact Us
        </Button>

        <ContactUsModal isOpen={isOpen} onClose={handleModalClose} /> 
      </div>
    </section>
  )
}

export default WhyChooseUsPage