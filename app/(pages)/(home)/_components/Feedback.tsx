'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Google from '../../../../public/images/discover/mobile/google.png';
import Jen from '../../../../public/images/discover/mobile/jen.png';
import RatingStars from './RatingIcon';

const Feedbacks = () => {
    const [isMobile, setIsMobile] = useState(false);

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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ul className="flex flex-wrap md:flex-nowrap animate-none md:animate-slide-right-left md:slide-infinite">
            
            {(isMobile ? users : users.concat(users)).map((user, index) => (
                <li key={index} className="flex-shrink-0 w-full md:w-[30rem] md:ml-[3.2rem] bg-bluish_white rounded-[1.6rem] p-[2.4rem] mb-[1.6rem] md:mb-0">
                    <div className='flex w-full mb-[2.4rem] gap-[1.6rem] items-center'>
                        <Image 
                            src={user.img}
                            alt={user.name}
                            width={16}
                            height={16}
                            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                        />
                    
                        <div className='flex w-full flex-wrap'>
                            <span className='w-full text-montserrat_bold_16 mb-[.8rem]'>{user.name}</span>
                            
                            <span className='text-montserrat_bold_16 flex gap-[.8rem] items-center overflow-hidden'>
                                {user.rating}
                                <div className='flex flex-wrap gap-1'>
                                    <RatingStars rating={parseFloat(user.rating)} maxRating={5} />
                                </div>
                            </span>
                        </div>
                    </div>
                    
                    <p className='flex w-full flex-wrap text-montserrat_regular_16 opacity-60 mb-[2.5rem]'>
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
                        <span className='pr-[1.6rem] opacity-60'>Posted on</span>
                        <Image src={user.posted_on} alt={'Google'} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Feedbacks;
