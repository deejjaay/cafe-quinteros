import React from 'react';
import Map from '../../../../public/images/discover/mobile/map.png';
import Image from 'next/image';

const JoinOurCommunityPage = () => {
  return (
    <section className="bg-cover bg-center bg-opacity-70 bg-[url('/images/discover/mobile/map.png')]">
      <div 
        className="md:py-custom-60 md:px-custom-40 py-custom-40 px-custom-16 opacity-90 lg:p-[120px] bg-dark_brown"
      >
        <div className="flex gap-[80px] md:flex-wrap grid xl:grid-cols-2">
          <div className="md:flex md:flex-wrap">
            <div className="md:flex md:flex-wrap md:w-full mb-[48px]">
              <h6 className="text-montserrat_bold_24 text-white mb-[16px] w-full">
                Join Our Cafe Community
              </h6>
              <p className="text-montserrat_regular_16 text-white opacity-60">
                Get daily breakfast and lunch specials! Please provide us your WhatsApp number.
              </p>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-[16px] w-full xl:items-end">
              <input
                className="w-full h-[64px] rounded-[8px] pl-3"
                type="text"
                placeholder="WhatsApp number*"
              />
              <button className="w-full md:w-auto px-[16px] h-[64px] rounded-[8px] text-white bg-primary text-montserrat_bold_16_1 whitespace-nowrap">
                Join Community
              </button>
            </div>
          </div>

          <Image 
            src={Map} 
            width={352} 
            height={410}
            alt={'Map'} 
            className="w-full md:h-[410px] lg:h-[251px] object-fill rounded-[8px]"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinOurCommunityPage;