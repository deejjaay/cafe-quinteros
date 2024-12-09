import Feedbacks from "../_components/Feedback";

const WordsFromCustomersPage = () => {
  
    return (
        <section className='md:py-custom-60 py-custom-40 bg-gray'>
            <div className='container xl:max-w-xl'>
                <div>
                    <h6 className='text-montserrat_bold_28 mb:text-montserrat_bold_40 lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-[16px] lg:text-center'>Words From Our Customers</h6>
                    <p className='text-montserrat_regular_16 opacity-60 mb-[24px] lg:text-center'>Our customers love our food and friendly vibe! Discover why we’re the top choice for El Salvadoran breakfast and lunch.</p>
                </div>

                <div className="overflow-hidden relative">
                    <Feedbacks />
                </div>
            </div>
        </section>
    );
};

export default WordsFromCustomersPage;
