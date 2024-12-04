import Image from "next/image";
import CaffeLatte from "../../../../public/images/discover/mobile/cafe_latte.png";
import ChocolateAndBanana from "../../../../public/images/discover/mobile/creppa_banana.png";
import ChickenCroissant from "../../../../public/images/discover/mobile/chicken_croissant.png";
import CaramelFrappe from "../../../../public/images/discover/mobile/caramel_frappe.png";
import HamChessePanini from "../../../../public/images/discover/mobile/ham_chesse_panini.png";
import BananaWalnutCaramelWaffle from "../../../../public/images/discover/mobile/banana_walnut_caramel_waffle.png";

const DiscoverOurMenuPage = ({}) => {
    const menus = [
        {
            label: "Cafe Latte",
            eng_lable: "Cafe Latte",
            img: CaffeLatte,
            description:
                "Creamy and rich, this espresso drink combines steamed milk with a light layer of froth. Perfect for those who love a smooth coffee experience!",
            price: "$2.50",
        },
        {
            label: "Crepa De Chocolate Y Banana",
            eng_lable: "Chocolate and Banana Crepe",
            img: ChocolateAndBanana,
            description:
                "A delightful combination of thin crepes filled with rich chocolate and sweet bananas. Perfect for a decadent dessert or breakfast!",
            price: "$2.50",
        },
        {
            label: "Croissant De Pollo",
            eng_lable: "Chicken Croissant",
            img: ChickenCroissant,
            description:
                "Buttery and tender, this croissant is filled with juicy chicken and creamy sauce. Perfect for a flavorful lunch or light snack!",
            price: "$2.50",
        },
        {
            label: "Frappe De Caramelo",
            eng_lable: "Caramel Frappé",
            img: CaramelFrappe,
            description:
                "Smooth and decadent, this blended caramel beverage is garnished with whipped cream and a caramel drizzle. Ideal for a refreshing treat!",
            price: "$2.50",
        },
        {
            label: "Panini De Jamon Y Queso",
            eng_lable: "Ham and Cheese Panini",
            img: HamChessePanini,
            description:
                "This sandwich features layers of savory ham and melted cheese between crispy bread. A delicious choice for a satisfying meal!",
            price: "$3.50",
        },
        {
            label: "Waffle De Banana, Nuez Y Caramelo",
            eng_lable: "Banana, Walnut, and Caramel Waffle",
            img: BananaWalnutCaramelWaffle,
            description:
                "A delicious waffle topped with sweet banana slices, crunchy walnuts, and drizzled with rich caramel. Perfect for a decadent breakfast or dessert!",
            price: "$2.50",
        },
    ];

  return (
    <section className="md:py-custom-60 py-custom-40 bg-gray">
        <div className="container xl:max-w-xl">
            <div>
                <h2 className="text-montserrat_bold_28 mb:text-montserrat_bold_40 lg:text-montserrat_bold_46 xl:text-montserrat_bold_48 mb-5 lg:text-center">Discover Our Menu</h2>
                <p className="text-montserrat_regular_16 xl:text-montserrat_regular_20 mb-[48px] opacity-60 lg:text-center">
                    From classic breakfasts to sweet desserts, our menu is filled with Salvadoran favorites.
                </p>
            </div>

            <div>
                <h3 className="text-montserrat_bold_20 mb-5">Best Seller</h3>
                <ul className="grid grid-cols-1 gap-[32px] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-0">
                    {menus.map((menu, index) => (
                    <li
                        key={index}
                        className="bg-white rounded-[16px] overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col lg:flex-col md:flex-row h-full">
                            
                            <Image
                                className="w-auto lg:w-full md:w-[200px] h-[182px] rounded-t-lg lg:h-[182px] md:h-full"
                                src={menu.img}
                                alt={menu.eng_lable}
                            />

                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <h4 className="text-montserrat_bold_20 mb-5">{menu.label}</h4>
                                <h5 className="text-montserrat_regular_20 mb-5">{menu.eng_lable}</h5>
                                <p className="text-montserrat_regular_16 opacity-60 mb-7">
                                    {menu.description}
                                </p>
                                <span className="text-primary text-montserrat_bold_20 mt-auto">
                                    {menu.price}
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </section>
  );
};

export default DiscoverOurMenuPage;
