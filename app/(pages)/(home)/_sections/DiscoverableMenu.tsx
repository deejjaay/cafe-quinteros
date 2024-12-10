import BestSeller from "../_components/BestSeller";
import MenuItemPage from "../_components/MenuItem";

const DiscoverOurMenuPage = ({}) => {
  
  return (
    <section className="md:py-custom-60 py-custom-40 bg-gray">
        <div className="container xl:max-w-xl">
            <h2 className="text-montserrat_bold_28 md:text-center mb:text-montserrat_bold_40 lg:text-center lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-5">
                Discover Our Menu
            </h2>
            <p className="mb-[4.8rem] md:text-center text-montserrat_regular_16 lg:text-center xl:text-montserrat_regular_20 opacity-60">
                From classic breakfasts to sweet desserts, our menu is filled with Salvadoran favorites.
            </p>

            <h3 className="text-montserrat_bold_20 mb-5 text-start">Best Seller</h3>
            <BestSeller />
            <MenuItemPage />
        </div>
    </section>
  );
};

export default DiscoverOurMenuPage;
