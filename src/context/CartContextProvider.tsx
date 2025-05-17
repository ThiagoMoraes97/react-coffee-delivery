import { useEffect, useState } from 'react';
import { Coffee } from '../data/coffees';
import { CartContext } from './CartContext';

export interface CartItensType {
    quantity: number;
    coffee: Coffee;
}


interface CartContextProviderProps {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItensType[]>([]);

    function addToCart( coffee: Coffee, quantity: number) {
        if (quantity == 0) {
            return;
        }

        const existingCoffee = cartItems.find(item => item.coffee.id === coffee.id);

        let updatedCartItens

        if (existingCoffee) {
            updatedCartItens = cartItems.map((item) => {
                
                if(item.coffee.id === existingCoffee.coffee.id) {
                    return {
                        coffee: item.coffee,
                        quantity: item.quantity + quantity
                    }
                } else {
                    return item
                }
            })

            setCartItems(updatedCartItens)
            localStorage.setItem('cart', JSON.stringify(updatedCartItens))
            return
        }

        updatedCartItens = {
            coffee,
            quantity
        }

        setCartItems((prev) => [...prev, updatedCartItens])

        localStorage.setItem('@react-coffee:cart', JSON.stringify([...cartItems, updatedCartItens]))

    }

    console.log(cartItems)

    function removeFromCart(coffeeID: number) {
        const cartWithoutCoffee = cartItems.filter(item => item.coffee.id !== coffeeID)
        setCartItems(cartWithoutCoffee)
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('@react-coffee:cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, [])

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );

}