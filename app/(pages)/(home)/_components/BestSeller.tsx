import Image from "next/image";
import { menus } from '../../../../public/assets/images';

const BestSeller = () => {
    const bestSellers = menus.filter(menu => menu.best_seller);
    
    return (
        <ul className="grid grid-cols-1 gap-[32px] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-[8rem]"> 
            {bestSellers.map((menu, index) => (
                <li
                    key={index}
                    className="bg-white rounded-[16px] overflow-hidden shadow-lg"
                >
                    <div className="flex flex-col lg:flex-col md:flex-row h-full">
                        <Image
                            className="w-auto h-[18.2rem] object-cover md:h-full lg:w-full md:w-[20rem] md:object-fill rounded-t-lg lg:h-[18.2rem] lg:object-cover"
                            src={menu.img}
                            alt={menu.eng_name || 'Default alt text'}
                            
                        />


                        <div className="p-5 flex flex-col justify-between flex-grow">
                            <h4 className="text-montserrat_bold_20 mb-5">{menu.name}</h4>
                            <h5 className="text-montserrat_regular_20 mb-5">{menu.eng_name}</h5>
                            <p className="text-montserrat_regular_16 opacity-60 mb-7">{menu.description}</p>
                            <span className="text-primary text-montserrat_bold_20 mt-auto">{menu.price}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default BestSeller