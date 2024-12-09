import Image from 'next/image'
import React from 'react'
import Couple from '../../../public/images/family.png'

const AboutUsPage = () => {
  return (
    <section className="md:py-custom-60 py-custom-40">
        <div className='container'>
            <div>
                <h1 className='mb-[2.4rem] text-montserrat_bold_32'>A Family Dream, A Living Legacy</h1>
                <Image 
                    src={Couple} 
                    alt={'Couple'} 
                    width={352} 
                    height={140} 
                    className='w-full h-[30vh] object-fill rounded-[.8rem] md:h-[40vh]'
                />
                <p className='my-[2.4rem]'>Founded in 2024 by Mario Quinteros, Grupo Quinteros was born from a family dream. The original vision came from Mario’s mother, Margarita Quinteros, who received her culinary training in Montreal, Canada, and always wanted to open a café to serve her community in El Salvador. Though Margarita passed away in 2020, her dream lives on through Café Quinteros, a tribute to her legacy and her love for food and community.</p>
                <p>At Café Quinteros, we carry the Quinteros family&apos;s vision forward, providing a place where everyone can feel at home, surrounded by good food and a warm welcome.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUsPage