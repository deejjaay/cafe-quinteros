import Feedbacks from "../_components/Feedback";

const WordsFromCustomersPage = () => {
  return (
    <section className="md:py-custom-60 py-custom-40 bg-gray">
      <div className="container xl:max-w-xl md:text-center">
        <h6 className="mb-[1.6rem] text-montserrat_bold_28 md:text-montserrat_bold_40 lg:text-center lg:text-montserrat_bold_46 xl:text-montserrat_bold_48">
          Words From Our Customers
        </h6>
        <p className="mb-[2.4rem] text-montserrat_regular_16 opacity-60 lg:text-center">
          Our customers love our food and friendly vibe! Discover why we’re the top choice for El Salvadoran breakfast and lunch.
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
            <Feedbacks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordsFromCustomersPage;
