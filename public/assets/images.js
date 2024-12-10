import Brownie from '../images/discover/mobile/brownie.png';
import Budin from '../images/discover/mobile/budin.png';
import Cafe from '../images/discover/mobile/cafe.png';
import Cappuccino from '../images/discover/mobile/cafe.png';
import CafeLatte from '../images/discover/mobile/cafe-latte.jpg'
import CreppaBanana from '../images/discover/mobile/creppa-banana.jpg';
import Croissant from '../images/discover/mobile/croissant.jpg';
import ChickenCroissant from '../images/discover/mobile/chicken_croissant.png';
import Neapolitan from '../images/discover/mobile/neapolitan.png';
import Flautas from '../images/discover/mobile/flautas.png';
import Caramelo from '../images/discover/mobile/frappe.jpg';
import Mocha from '../images/discover/mobile/mocha.png';
import Oreo from '../images/discover/mobile/oreo.png';
import Tartaletas from '../images/discover/mobile/tartaletas.png';
import HamChessePanini from '../images/discover/mobile/panini.jpg';
import BananaWalnutCaramelWaffle from '../images/discover/mobile/banana_walnut_caramel_waffle.png';
import Pizza from '../images/discover/mobile/pizza.png';
import Refresco from '../images/discover/mobile/refresco.png';

export const menus = [
    {
        name: 'Brownie', 
        eng_name: 'Brownie', 
        img: Brownie, 
        description: 'Rich, fudgy chocolate brownie, chewy and decadent. A chocolate lover&apos;s dream, perfect on its own or with a scoop of ice cream!', 
        price: '$2.50',
        category: 'Desserts',
    },
    {
        name: 'Budin', 
        eng_name: 'Pudding', 
        img: Budin, 
        description: 'Creamy and indulgent, this delightful pudding is smooth. A comforting treat, it&apos;s perfect on its own or topped with fruit!', 
        price: '$2.00',
        category: 'Desserts'
    },
    {
        name: 'Cafe Americano', 
        eng_name: 'Cafe Americano', 
        img: Cafe, 
        description: 'Bold and smooth, this espresso coffee is diluted with hot water for a rich flavor. Perfect for those who enjoy a strong yet balanced cup!', 
        price: '$2.00',
        category: 'Hot Beverages'
    },
    {
        name: 'Cafe Latte', 
        eng_name: 'Cafe Latte', 
        img: CafeLatte, 
        description: 'Creamy and rich, this espresso drink combines steamed milk with a light layer of froth. Perfect for those who love a smooth coffee experience!', 
        price: '$2.50',
        category: 'Hot Beverages',
        best_seller: 'Cafe Latte'
    },
    {
        name: 'Cappuccino', 
        eng_name: 'Cappuccino', 
        img: Cappuccino, 
        description: 'This espresso drink features equal parts espresso, steamed milk, and creamy foam. Perfect for those who enjoy a rich coffee experience!', 
        price: '$2.50',
        category: 'Hot Beverages'
    },
    {
        name: 'Crepa De Chocolate Y Banana', 
        eng_name: 'Chocolate and Banana Crepe', 
        img: CreppaBanana, 
        description: 'A delightful combination of thin crepes filled with rich chocolate and sweet bananas. Perfect for a decadent dessert or breakfast!', 
        price: '$2.50',
        category: 'Desserts',
        best_seller: 'Crepa De Chocolate Y Banana'
    },
    {
        name: 'Croissant de Jamon y Queso', 
        eng_name: 'Croissant de Jamon y Queso', 
        img: Croissant, 
        description: 'Flaky and buttery, this croissant is stuffed with savory ham and melted cheese. Ideal for a satisfying breakfast or snack!', 
        price: '$2.50',
        category: 'More snacks'
    },
    {
        name: 'Croissant de Pollo', 
        eng_name: 'Chicken Croissant', 
        img: ChickenCroissant, 
        description: 'Buttery and tender, this croissant is filled with juicy chicken and creamy sauce. Perfect for a flavorful lunch or light snack!', 
        price: '$2.50',
        category: 'More snacks',
        best_seller: 'Croissant de Pollo'
    },
    {
        name: 'Flan Napolitano', 
        eng_name: 'Neapolitan Flan', 
        img: Neapolitan, 
        description: 'This rich caramel custard dessert is delightfully sweet and creamy. A classic treat, perfect for ending any meal on a delicious note!', 
        price: '$2.50',
        category: 'Desserts'
    },
    {
        name: 'Flautas de Pollo', 
        eng_name: 'Flautas de Pollo', 
        img: Flautas, 
        description: 'Crispy rolled tortillas filled with seasoned chicken, fried to perfection. Served with toppings like salsa and guacamole.', 
        price: '$2.50',
        category: 'More snacks'
    },
    {
        name: 'Frappe De Caramelo', 
        eng_name: 'Caramel Frappé', 
        img: Caramelo, 
        description: 'Smooth and decadent, this blended caramel beverage is garnished with whipped cream and a caramel drizzle. Ideal for a refreshing treat!', 
        price: '$2.50',
        category: 'Cold Drinks',
        best_seller: 'Frappe De Caramelo'
    },
    {
        name: 'Frappe de mocha', 
        eng_name: 'Mocha Frappé', 
        img: Mocha, 
        description: 'This blended mocha features espresso, chocolate, and milk, with whipped cream and chocolate drizzle. A treat for coffee lovers!', 
        price: '$3.50',
        category: 'Cold Drinks'
    },
    {
        name: 'Frappe de oreo', 
        eng_name: 'Oreo Frappé', 
        img: Oreo, 
        description: 'This blended treat combines Oreo cookies, milk, and ice, with whipped cream and cookie crumbles. A delicious dessert for cookie fans!', 
        price: '$2.50',
        category: 'Cold Drinks'
    },
    {
        name: 'Mini Tartaletas', 
        eng_name: 'Mini Tarts', 
        img: Tartaletas, 
        description: 'Delightful bite-sized pastries filled with sweet or savory fillings, perfect for appetizers or desserts. Great for parties or as a tasty snack!', 
        price: '$2.50',
        category: 'Desserts'
    },
    {
        name: 'Panini De Jamon Y Queso', 
        eng_name: 'Ham and Cheese Panini', 
        img: HamChessePanini, 
        description: 'This sandwich features layers of savory ham and melted cheese between crispy bread. A delicious choice for a satisfying meal!', 
        price: '$3.50',
        category: 'More snacks',
        best_seller: 'Panini De Jamon Y Queso'
    },
    {
        name: 'Pizza Peperoni', 
        eng_name: 'Peperoni Pizza', 
        img: Pizza, 
        description: 'This pizza features a crispy crust with tomato sauce, cheese, and flavorful pepperoni slices. Perfect for a casual meal or gathering!',
        price: '$3.50',
        category: 'More snacks'
    },
    {
        name: 'Refresco de Fresa', 
        eng_name: 'Strawberry Soda', 
        img: Refresco, 
        description: 'A refreshing strawberry soda that combines sweet and fruity flavors, perfect for a cool drink on a warm day!', 
        price: '$3.50',
        category: 'Cold Drinks'
    },
    {
        name: 'Waffle De Banana, Nuez Y Caramelo', 
        eng_name: 'Banana, Walnut, and Caramel Waffle', 
        img: BananaWalnutCaramelWaffle, 
        description: 'A delicious waffle topped with sweet banana slices, crunchy walnuts, and drizzled with rich caramel. Perfect for a decadent breakfast or dessert!', 
        price: '$3.50',
        category: 'Desserts',
        best_seller: 'Waffle De Banana, Nuez Y Caramelo'
    },
];