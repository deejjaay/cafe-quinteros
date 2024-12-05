import BestSeller from "../_components/BestSeller";

const DiscoverOurMenuPage = ({}) => {
  
  return (
    <section className="md:py-custom-60 py-custom-40 bg-gray">
        <div className="container xl:max-w-xl">
            <div>
                <h2 className="text-montserrat_bold_28 mb:text-montserrat_bold_40 lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-5 lg:text-center">
                    Discover Our Menu
                </h2>
                <p className="text-montserrat_regular_16 xl:text-montserrat_regular_20 mb-[48px] opacity-60 lg:text-center">
                    From classic breakfasts to sweet desserts, our menu is filled with Salvadoran favorites.
                </p>
            </div>

            <div>
                <h3 className="text-montserrat_bold_20 mb-5">Best Seller</h3>
                <BestSeller />
            </div>
        </div>
    </section>
  );
};

export default DiscoverOurMenuPage;
