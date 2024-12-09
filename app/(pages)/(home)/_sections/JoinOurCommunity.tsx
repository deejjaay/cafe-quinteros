import React from 'react';
import Map from '../../../../public/images/discover/mobile/map.png';
import Image from 'next/image';

const JoinOurCommunityPage = () => {
    return (
        <section className="bg-cover bg-center bg-opacity-70 bg-[url('/images/discover/mobile/map.png')]">
            <div className='bg-brown opacity-90'>
                <div className='container gap-[80px] md:py-custom-60 py-custom-40 md:flex-wrap xl:px-[4rem] grid xl:grid-cols-2'>
                    <div className="md:flex md:flex-wrap">
                        <div className="md:flex md:flex-wrap md:w-full mb-[48px]">
                            <h6 className="w-full text-montserrat_bold_24 text-white mb-[16px]">
                                Join Our Cafe Community
                            </h6>
                            <p className="text-montserrat_regular_16 text-white opacity-60">
                                Get daily breakfast and lunch specials! Please provide us your WhatsApp number.
                            </p>
                        </div>

                        <div className="w-full flex flex-wrap gap-[16px] md:flex-nowrap xl:items-end">
                            <input
                                className="w-full h-[64px] rounded-[8px] pl-3"
                                type="text"
                                placeholder="WhatsApp number*"
                            />
                            <button className="w-full px-[16px] h-[64px] rounded-[8px] text-white bg-primary text-montserrat_bold_16_1 whitespace-nowrap md:w-auto">
                                Join Community
                            </button>
                        </div>
                    </div>

                    <Image 
                        src={Map} 
                        width={352} 
                        height={410}
                        alt={'Map'} 
                        className="w-full object-cover rounded-[8px] md:h-[410px] xl:h-[251px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default JoinOurCommunityPage;