import { createContext } from "react";
import { CartItensType } from "./CartContextProvider";
import { Coffee } from "../data/coffees";

interface CartContextType {
    cartItems: CartItensType[];
    addToCart: (coffee: Coffee, quantity: number) => void;
    removeFromCart: (coffeeId: number) => void;
}

export const CartContext = createContext({} as CartContextType);
