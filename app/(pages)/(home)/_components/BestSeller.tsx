import Image from "next/image";
import { menus } from '../../../../public/assets/images';

const BestSeller = () => {
    const bestSellers = menus.filter(menu => menu.best_seller);
    
    return (
        <ul className=" mb-[6rem] grid grid-cols-1 gap-[3.2rem] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"> 
            {bestSellers.map((menu, index) => (
                <li
                    key={index}
                    className="bg-bluish_white rounded-[1.6rem] overflow-hidden shadow-lg"
                >
                    <div className="flex flex-col h-full md:flex-row lg:flex-col">
                        <Image
                            className="w-auto h-[18.2rem] object-cover md:w-[20rem] md:h-full md:object-fill rounded-t-lg lg:w-full lg:h-[18.2rem] lg:object-cover"
                            src={menu.img}
                            alt={menu.eng_name || 'Default alt text'}
                            width={830}
                            height={623}
                        />

                        <div className="p-[1.6rem] flex flex-col justify-between flex-grow">
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