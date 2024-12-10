import Authentic from '../../../../public/images/discover/mobile/authentic.png'
import Locally from '../../../../public/images/discover/mobile/locally.png'
import Community from '../../../../public/images/discover/mobile/community.png'
import Image from 'next/image';
import ContactUsModal from '@/app/_components/ContactUsModal';

const WhyChooseUsPage = () => {
  
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
        <section className='md:py-custom-60 py-custom-40 bg-white'>
            <div className='container xl:max-w-xl md:text-center'>
                <div className='mb-[48px]'>
                    <h6 className='text-montserrat_bold_28 md:text-montserrat_bold_40 lg:text-center lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-[16px]'>Why Choose Café Quinteros</h6>
                    <p className='text-montserrat_regular_16 opacity-60 lg:text-center'>Taste El Salvador&apos;s regional and local breakfast & lunch in a place that&apos;s more than just a coffee shop.</p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-1 lg:gap-[3.2rem] lg:grid-cols-3">
                    {listItems.map((item, index) => <li key={index} className='bg-gray gap-[3.2rem] mb-[3.2rem] p-[2.4rem] rounded-[1.6rem]'>
                        <div className='flex flex-col md:flex-row lg:flex-col'>
                            <Image 
                            src={item.img} 
                            alt={item.label} 
                            width={81.4} 
                            height={80} 
                            className='pr-[24px] mb-[2.4rem] md:mb-0 lg:mb-[2.4rem]'
                            />
                            <div className='text-start border-solid border-blue md:pl-[24px] md:border-l-2 lg:ml-auto lg:border-none lg:p-0'>
                                <span className='text-montserrat_bold_20'>{item.label}</span>
                                <p className='text-montserrat_regular_18 opacity-60 mt-[2.4rem]'>{item.description}</p>
                            </div>
                        </div>
                    </li>)}
                </ul>

                <div className='flex justify-center lg:justify-center'>
                    <ContactUsModal buttonSize='why_choose' /> 
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsPage