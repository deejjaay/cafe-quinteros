import Image from "next/image";
import { menus } from '../../../../public/assets/images';
import MenuItemPage from "./MenuItem";

const BestSeller = () => {
    const bestSellers = menus.filter(menu => menu.best_seller);
    
    return (
        <div>
            <ul className="grid grid-cols-1 gap-[32px] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-[8rem]"> 
                {bestSellers.map((menu, index) => (
                    <li
                        key={index}
                        className="bg-white rounded-[16px] overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col lg:flex-col md:flex-row h-full">
                            <Image
                                className="w-auto lg:w-full md:w-[200px] h-[182px] rounded-t-lg lg:h-[182px] md:h-full"
                                src={menu.img}
                                alt={menu.eng_lable || 'Default alt text'}
                                
                            />


                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <h4 className="text-montserrat_bold_20 mb-5">{menu.label}</h4>
                                <h5 className="text-montserrat_regular_20 mb-5">{menu.eng_lable}</h5>
                                <p className="text-montserrat_regular_16 opacity-60 mb-7">{menu.description}</p>
                                <span className="text-primary text-montserrat_bold_20 mt-auto">{menu.price}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <MenuItemPage />
        </div>
    )
}

export default BestSeller