'use client';

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
      answer: "Absolument ! Contactez-nous sur WhatsApp en utilisant ce numéro <a href='tel:+503-6925-6177' class='text-montserrat_regular_14 md:text-montserrat_bold_18 text-primary'>+503 6925 6177</a> pour les réservations."
    },
    {
      question: "Puis-je réserver après les heures d'ouverture ?",
      answer: "Oui ! Vous devez nous contacter via WhatsApp (<a href='tel:+503-6925-6177' class='text-montserrat_regular_14 md:text-montserrat_bold_18 text-primary'>+503 6925 6177</a>) pour la confirmation finale."
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
      answer: "Oui ! Contactez-nous simplement via WhatsApp (<a href='tel:+503-6925-6177' class='text-montserrat_regular_14 md:text-montserrat_bold_18 text-primary'>+503 6925 6177</a>) et faites-nous savoir combien de livres vous souhaitez, et si vous voulez que nous les moulions. Nous pouvons moudre de très fin à grossier."
    },
    {
      question: "Acceptez-vous des demandes spéciales ?",
      answer: "Absolument ! Si vous avez un événement spécial, nous pouvons faire des accommodations et des commandes spéciales. Contactez-nous via WhatsApp (<a href='tel:+503-6925-6177' class='text-montserrat_regular_14 md:text-montserrat_bold_18 text-primary'>+503 6925 6177</a>) pour organiser tout cela."
    },    
  ];

    return (
        <section className='md:py-custom-60 py-custom-40 bg-bluish_white'>
            <div className='container xl:max-w-xl md:text-center'>
                <h6 className='mb-[3.2rem] text-montserrat_bold_28 md:text-center md:text-montserrat_bold_40 lg:text-montserrat_bold_46 xl:text-montserrat_bold_48'>Frequently Asked Questions</h6>
                {faqs.map((faq, index) => (
                    <div className="bg-gray rounded-[1rem] mb-[2rem]" key={index}>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center py-[3rem] px-[2.8rem]"
                        >
                            <span className='flex text-left text-montserrat_bold_16 md:text-left md:text-montserrat_bold_20 pr-5'>{faq.question}</span>
                            <span className={`w-[2.1rem] h-[2.1rem] text-blue transition-transform duration-300 ${openIndex.includes(index) ? 'rotate-180' : ''}`}>
                                {openIndex.includes(index) ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="21" height="21">
                                        <path d="M3 8.5h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0 0 1z" className='stroke-primary' strokeWidth="1.2"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-[2.1rem] h-[2.1rem] stroke-blue" strokeWidth="1.5" width="2.1rem" height="2.1rem">
                                        <path d="M8 2.75a.75.75 0 0 0-.75.75v3.5H3.5a.75.75 0 0 0 0 1.5h3.75v3.5a.75.75 0 0 0 1.5 0v-3.5h3.75a.75.75 0 0 0 0-1.5h-3.75v-3.5a.75.75 0 0 0-.75-.75z" />
                                    </svg>
                                )}
                            </span>
                        </button>

                        <div
                            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openIndex.includes(index) ? 'max-h-screen border-t-2 border-blue' : ''}`}
                        >
                            <div className="p-[2.8rem] text-start text-sub_text/60 text-montserrat_regular_14 md:text-montserrat_regular_18" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQPage;
