'use client';

import Image from "next/image";
import Hero from '../../../../public/images/hero.png';
import { Button } from "@radix-ui/themes";
import ContactUsModal from "@/app/_components/ContactUsModal";
import { useState } from "react";

const HeroPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="flex md:py-custom-60 md:px-custom-40 py-custom-40 px-custom-16 gap-24 lg:px-[120px]">
      <div>
        <h1 className="text-montserrat_regular_18">Café Quinteros:</h1>
        <h2 className="text-montserrat_bold_32 
            md:text-montserrat_bold_46 
            lg:text-montserrat_bold_52 
            xl:text-montserrat_bold_64"
        >
            For <span className="text-primary">Salvadorans</span> by Salvadorans
        </h2>
        <p className="mb-5 text-montserrat_regular_16 xl:text-montserrat_regular_20 opacity-60">Enjoy the true taste of El Salvador with every sip and bite. We serve local coffee, traditional food, and sweet treats.</p>
        <Button 
          className="bg-primary text-white text-montserrat_bold_16 rounded-[8px] w-[180px] h-[64px]" 
          onClick={() => setIsOpen(true)}
        >
          Contact Us
        </Button>

        <ContactUsModal isOpen={isOpen} onClose={handleModalClose} /> 
      </div>

      <div>
        <Image className="hidden md:block h-full w-full" src={Hero} alt={'Hero Image'} width={346} height={369} />
      </div>
    </section>
  )
}

export default HeroPage