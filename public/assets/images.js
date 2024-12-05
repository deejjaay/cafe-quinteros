import Brownie from '../images/discover/mobile/brownie.png';
import Budin from '../images/discover/mobile/budin.png';
import Cafe from '../images/discover/mobile/cafe.png';
import Cappuccino from '../images/discover/mobile/cafe.png';
import CafeLatte from '../images/discover/mobile/cafe_latte.png'
import CreppaBanana from '../images/discover/mobile/creppa_banana.png';
import Croissant from '../images/discover/mobile/croissant.png';
import ChickenCroissant from '../images/discover/mobile/chicken_croissant.png';
import Neapolitan from '../images/discover/mobile/neapolitan.png';
import Flautas from '../images/discover/mobile/flautas.png';
import Caramelo from '../images/discover/mobile/caramelo.png';
import Mocha from '../images/discover/mobile/mocha.png';
import Oreo from '../images/discover/mobile/oreo.png';
import Tartaletas from '../images/discover/mobile/tartaletas.png';
import HamChessePanini from '../images/discover/mobile/ham_chesse_panini.png';
import BananaWalnutCaramelWaffle from '../images/discover/mobile/banana_walnut_caramel_waffle.png';
import Pizza from '../images/discover/mobile/pizza.png';
import Refresco from '../images/discover/mobile/refresco.png';

export const menus = [
    {
        label: 'Brownie', 
        eng_lable: 'Brownie', 
        img: Brownie, 
        description: 'Rich, fudgy chocolate brownie, chewy and decadent. A chocolate lover&apos;s dream, perfect on its own or with a scoop of ice cream!', 
        price: '$2.50',
        category: 'Desserts',
    },
    {
        label: 'Budin', 
        eng_lable: 'Pudding', 
        img: Budin, 
        description: 'Creamy and indulgent, this delightful pudding is smooth. A comforting treat, it&apos;s perfect on its own or topped with fruit!', 
        price: '$2.00',
        category: 'Desserts'
    },
    {
        label: 'Cafe Americano', 
        eng_lable: 'Cafe Americano', 
        img: Cafe, 
        description: 'Bold and smooth, this espresso coffee is diluted with hot water for a rich flavor. Perfect for those who enjoy a strong yet balanced cup!', 
        price: '$2.00',
        category: 'Hot Beverages'
    },
    {
        label: 'Cafe Latte', 
        eng_lable: 'Cafe Latte', 
        img: CafeLatte, 
        description: 'Creamy and rich, this espresso drink combines steamed milk with a light layer of froth. Perfect for those who love a smooth coffee experience!', 
        price: '$2.50',
        category: 'Hot Beverages',
        best_seller: 'Cafe Latte'
    },
    {
        label: 'Cappuccino', 
        eng_lable: 'Cappuccino', 
        img: Cappuccino, 
        description: 'This espresso drink features equal parts espresso, steamed milk, and creamy foam. Perfect for those who enjoy a rich coffee experience!', 
        price: '$2.50',
        category: 'Hot Beverages'
    },
    {
        label: 'Crepa De Chocolate Y Banana', 
        eng_lable: 'Chocolate and Banana Crepe', 
        img: CreppaBanana, 
        description: 'A delightful combination of thin crepes filled with rich chocolate and sweet bananas. Perfect for a decadent dessert or breakfast!', 
        price: '$2.50',
        category: 'Desserts',
        best_seller: 'Crepa De Chocolate Y Banana'
    },
    {
        label: 'Croissant de Jamon y Queso', 
        eng_lable: 'Croissant de Jamon y Queso', 
        img: Croissant, 
        description: 'Flaky and buttery, this croissant is stuffed with savory ham and melted cheese. Ideal for a satisfying breakfast or snack!', 
        price: '$2.50',
        category: 'More snacks'
    },
    {
        label: 'Croissant de Pollo', 
        eng_lable: 'Chicken Croissant', 
        img: ChickenCroissant, 
        description: 'Buttery and tender, this croissant is filled with juicy chicken and creamy sauce. Perfect for a flavorful lunch or light snack!', 
        price: '$2.50',
        category: 'More snacks',
        best_seller: 'Croissant de Pollo'
    },
    {
        label: 'Flan Napolitano', 
        eng_lable: 'Neapolitan Flan', 
        img: Neapolitan, 
        description: 'This rich caramel custard dessert is delightfully sweet and creamy. A classic treat, perfect for ending any meal on a delicious note!', 
        price: '$2.50',
        category: 'Desserts'
    },
    {
        label: 'Flautas de Pollo', 
        eng_lable: 'Flautas de Pollo', 
        img: Flautas, 
        description: 'Crispy rolled tortillas filled with seasoned chicken, fried to perfection. Served with toppings like salsa and guacamole.', 
        price: '$2.50',
        category: 'More snacks'
    },
    {
        label: 'Frappe De Caramelo', 
        eng_lable: 'Caramel Frappé', 
        img: Caramelo, 
        description: 'Smooth and decadent, this blended caramel beverage is garnished with whipped cream and a caramel drizzle. Ideal for a refreshing treat!', 
        price: '$2.50',
        category: 'Cold Drinks',
        best_seller: 'Frappe De Caramelo'
    },
    {
        label: 'Frappe de mocha', 
        eng_lable: 'Mocha Frappé', 
        img: Mocha, 
        description: 'This blended mocha features espresso, chocolate, and milk, with whipped cream and chocolate drizzle. A treat for coffee lovers!', 
        price: '$3.50',
        category: 'Cold Drinks'
    },
    {
        label: 'Frappe de oreo', 
        eng_lable: 'Oreo Frappé', 
        img: Oreo, 
        description: 'This blended treat combines Oreo cookies, milk, and ice, with whipped cream and cookie crumbles. A delicious dessert for cookie fans!', 
        price: '$2.50',
        category: 'Cold Drinks'
    },
    {
        label: 'Mini Tartaletas', 
        eng_lable: 'Mini Tarts', 
        img: Tartaletas, 
        description: 'Delightful bite-sized pastries filled with sweet or savory fillings, perfect for appetizers or desserts. Great for parties or as a tasty snack!', 
        price: '$2.50',
        category: 'Desserts'
    },
    {
        label: 'Panini De Jamon Y Queso', 
        eng_lable: 'Ham and Cheese Panini', 
        img: HamChessePanini, 
        description: 'This sandwich features layers of savory ham and melted cheese between crispy bread. A delicious choice for a satisfying meal!', 
        price: '$3.50',
        category: 'More snacks',
        best_seller: 'Panini De Jamon Y Queso'
    },
    {
        label: 'Pizza Peperoni', 
        eng_lable: 'Peperoni Pizza', 
        img: Pizza, 
        description: 'This pizza features a crispy crust with tomato sauce, cheese, and flavorful pepperoni slices. Perfect for a casual meal or gathering!',
        price: '$3.50',
        category: 'More snacks'
    },
    {
        label: 'Refresco de Fresa', 
        eng_lable: 'Strawberry Soda', 
        img: Refresco, 
        description: 'A refreshing strawberry soda that combines sweet and fruity flavors, perfect for a cool drink on a warm day!', 
        price: '$3.50',
        category: 'Cold Drinks'
    },
    {
        label: 'Waffle De Banana, Nuez Y Caramelo', 
        eng_lable: 'Banana, Walnut, and Caramel Waffle', 
        img: BananaWalnutCaramelWaffle, 
        description: 'A delicious waffle topped with sweet banana slices, crunchy walnuts, and drizzled with rich caramel. Perfect for a decadent breakfast or dessert!', 
        price: '$3.50',
        category: 'Desserts',
        best_seller: 'Waffle De Banana, Nuez Y Caramelo'
    },
];