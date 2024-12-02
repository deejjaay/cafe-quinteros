'use client';

import Image from 'next/image';
import Google from '../../../../public/images/discover/mobile/google.png';
import Jen from '../../../../public/images/discover/mobile/jen.png';
import RatingStars from '../_component/RatingIcon';

const WordsFromCustomersPage = () => {
  const users = [
    {
      img: Jen,
      name: 'María Ángeles Córdova',
      rating: '5.0',
      description: 'Delicious freshly prepared breakfast, affordable price',
      posted_on: Google
    },
    {
      img: Jen,
      name: 'Jennifer Luna',
      rating: '5.0',
      description: 'Everyone should at least taste and try Cafe Quinteros in their lifetime. It’s such a shame if you don’t!',
      posted_on: Google
    },
    {
      img: Jen,
      name: 'Gilbert Clars',
      rating: '5.0',
      description: {
        Food: '5',
        Service: '5',
        Atmosphere: '5'
      },
      posted_on: Google
    },
  ];

  return (
    <section className='md:py-custom-60 md:px-custom-40 py-custom-40 px-custom-16 bg-background_color lg:px-[120px]'>
      <div>
        <h6 className='text-montserrat_bold_28 mb:text-montserrat_bold_40 lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-[16px] lg:text-center'>Words From Our Customers</h6>
        <p className='text-montserrat_regular_16 opacity-60 mb-[24px] lg:text-center'>Our customers love our food and friendly vibe! Discover why we’re the top choice for El Salvadoran breakfast and lunch.</p>
      </div>

      <div className="overflow-hidden relative">
        <ul className="flex animate-slide-right-left space-x-[32px]">
          {users.concat(users).map((user, index) => (
            <li key={index} className="flex-shrink-0 w-[300px] bg-white rounded-[16px] p-[24px]">
              <div className='flex w-full mb-[24px] gap-[16px] items-center'>
                <Image 
                  src={user.img}
                  alt={user.name}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
          
                <div className='flex w-full flex-wrap'>
                  <span className='w-full text-montserrat_bold_16 mb-[8px]'>{user.name}</span>
                  
                  <span className='text-montserrat_bold_16 flex gap-[8px] items-center overflow-hidden'>
                    {user.rating}
                    <div className='flex flex-wrap gap-1'>
                      <RatingStars rating={parseFloat(user.rating)} maxRating={5} />
                    </div>
                  </span>
                </div>
              </div>
              
              <p className='flex w-full flex-wrap text-montserrat_regular_16 opacity-60 mb-[25px]'>
                {typeof user.description === 'string'
                  ? user.description
                  : Object.entries(user.description).map(([key, value]) => (
                      <span className='flex w-full flex-wrap' key={key}>
                        {key}: {value}{" "}
                      </span>
                    ))
                }
              </p>
            
              <div className='flex w-full text-montserrat_regular_16 mt-[auto]'>
                <span className='pr-[16px] opacity-60'>Posted on</span>
                <Image src={user.posted_on} alt={'Google'} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WordsFromCustomersPage;
