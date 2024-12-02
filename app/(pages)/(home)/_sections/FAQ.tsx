'use client';

import { Button } from '@radix-ui/themes';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => {
      if (prev.includes(index))
        return prev.filter(i => i !== index);
      return [...prev, index];
    });
  };

  const faqs = [
    {
      question: "Puis-je réserver une table à l'avance ?",
      answer: "Absolument ! Contactez-nous sur WhatsApp en utilisant ce numéro +503 6925 6177 pour les réservations."
    },
    {
      question: "Puis-je réserver après les heures d'ouverture ?",
      answer: "Oui ! Vous devez nous contacter via WhatsApp (+503 6925 6177) pour la confirmation finale."
    },
    {
      question: "Y a-t-il un espace de stationnement disponible ?",
      answer: "Oui. Nous avons un espace de stationnement exclusivement réservé à nos clients !"
    },
    {
      question: "Avez-vous du Wi-Fi gratuit pour les clients ?",
      answer: "Oui, nous avons du Wi-Fi gratuit disponible exclusivement pour les clients. C'est suffisamment rapide pour que vous puissiez travailler depuis notre café !"
    },
    {
      question: "Le café est-il accueillant pour les animaux de compagnie ?",
      answer: "Oui, nous accueillons les animaux ! Assurez-vous simplement qu'ils ne dérangent pas les autres clients et qu'ils ne causent aucun dommage."
    },
    {
      question: "Vendez-vous des grains de café ?",
      answer: "Oui ! Contactez-nous simplement via WhatsApp (+503 6925 6177) et faites-nous savoir combien de livres vous souhaitez, et si vous voulez que nous les moulions. Nous pouvons moudre de très fin à grossier."
    },
    {
      question: "Acceptez-vous des demandes spéciales ?",
      answer: "Absolument ! Si vous avez un événement spécial, nous pouvons faire des accommodations et des commandes spéciales. Contactez-nous via WhatsApp (+503 6925 6177) pour organiser tout cela."
    },    
  ];

  return (
    <section className='md:py-custom-60 md:px-custom-40 py-custom-40 px-custom-16 bg-white lg:px-[120px]'>
      <h6 className='text-montserrat_bold_28 mb:text-montserrat_bold_40 lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-[16px]'>Frequently Asked Questions</h6>
      {faqs.map((faq, index) => (
        <div className="bg-gray rounded-[10px] mb-[20px]" key={index}>
          <Button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-[30px] px-[28px]"
          >
            <span className='flex text-left text-montserrat_bold_16 pr-5'>{faq.question}</span>
            <span className={`w-[21px] h-[21px] text-blue transition-transform duration-300 ${openIndex.includes(index) ? 'rotate-180' : ''}`}>
              {openIndex.includes(index) ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="21" height="21">
                  <path d="M3 8.5h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0 0 1z" className='stroke-primary' stroke-width="1.2"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 w-[21px] h-[21px] stroke-blue" stroke-width="1.5" width="21px" height="21px">
                  <path d="M8 2.75a.75.75 0 0 0-.75.75v3.5H3.5a.75.75 0 0 0 0 1.5h3.75v3.5a.75.75 0 0 0 1.5 0v-3.5h3.75a.75.75 0 0 0 0-1.5h-3.75v-3.5a.75.75 0 0 0-.75-.75z" />
                </svg>
              )}
            </span>
          </Button>

          <div
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openIndex.includes(index) ? 'max-h-screen border-t-2 border-blue' : ''}`}
          >
            <div className="p-[28px] text-montserrat_regular_14 opacity-60">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQPage;
