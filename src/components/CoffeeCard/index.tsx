import { CoffeeCardContainer, CoffeeTags, CoffeeTagsGroup, CoffeeCartInfo, CoffeeQuantity } from "./style";
import { ShoppingCart, Plus, Minus } from "@phosphor-icons/react";
import { Coffee } from "../../data/coffees";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {

    const [quantity, setQuantity] = useState(0);
    const { image, tags, title, description, price } = coffee;

    const { addToCart } = useCart();

    const formatted = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    function handleQuantity(type: 'plus' | 'minus') {
        if (type === 'plus') {
            setQuantity((prev) => prev + 1);
        } else {
            setQuantity((prev) => prev > 0 ? prev - 1 : 0);
        }
    }

    function handleAddToCart() {
        addToCart(coffee, quantity);
        setQuantity(0);
    }

  return (
    <CoffeeCardContainer>
        <img src={image }alt="Imagem de uma chicara de café" />

        <CoffeeTagsGroup>
            {tags.map(tag => (
                <CoffeeTags key={tag}>{tag}</CoffeeTags>
            ))}
        </CoffeeTagsGroup>

        <h3>{title}</h3>
        <p>{description}</p>
        
        <CoffeeCartInfo>
            <div className="coffee-price">
                <small>R$</small>
                <span>{formatted}</span>
            </div>
            
            <CoffeeQuantity>
                <button className="btnMinus">
                    <Minus size={14} weight="bold" onClick={() => {handleQuantity('minus')}}/>
                </button>
                <span>{quantity}</span>
                <button className="btnPlus">
                    <Plus size={14} weight="bold" onClick={() => {handleQuantity('plus')}}/>
                </button>
            </CoffeeQuantity>
            <button className="btnAddToCart" onClick={handleAddToCart}>
                <ShoppingCart size={22} weight="fill" />
            </button>
        </CoffeeCartInfo>

    </CoffeeCardContainer>
  )
}