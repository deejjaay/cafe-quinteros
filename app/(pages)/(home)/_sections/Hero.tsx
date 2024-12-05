import Image from "next/image";
import Hero from '../../../../public/images/hero.png';
import ContactUsModal from "@/app/_components/ContactUsModal";

const HeroPage = () => {

    return (
        <section className="flex md:py-custom-60 py-custom-40 gap-24">
            <div className="container flex justify-between items-center md:gap-[2.4rem] lg:gap-[3.2rem] xl:gap-[4.8rem] xl:max-w-xl">
                <div className="flex flex-wrap xl:w-[60.6rem] xl:h-[38rem]">
                    <h1 className="w-full mb-[1.6rem] text-montserrat_bold_32 md:text-montserrat_bold_46 lg:text-montserrat_bold_52 flex flex-wrap">
                        <span className="w-full text-montserrat_bold_18">Café Quinteros:</span>For&nbsp;
                        <span className="text-primary">Salvadorans&nbsp; </span>by Salvadorans
                    </h1>
                
                    <p className="mb-[3.2rem] text-montserrat_regular_16 xl:text-montserrat_regular_20 opacity-60">
                        Enjoy the true taste of El Salvador with every sip and bite. We serve local coffee, traditional food, and sweet treats.
                    </p>
                    
                    <ContactUsModal buttonSize='hero' />
                </div>

                <Image 
                    className="hidden h-full w-full md:flex md:w-[25.6rem] lg:w-[34.6rem] xl:w-[54.6rem]" 
                    src={Hero} 
                    alt={'Hero Image'} 
                    width={346} 
                    height={369} 
                />
            </div>
        </section>
    );
}

export default HeroPage;
