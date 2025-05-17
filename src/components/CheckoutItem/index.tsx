import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CheckoutItemContainer, CheckoutItensContent, CheckoutItemQuantity, CheckoutItemRemove  } from "./style";
import { Coffee } from "../../data/coffees";
import { useCart } from "../../hooks/useCart";

interface CheckoutItemProps {
    coffee: Coffee
    quantity: number
}

export function CheckoutItem({coffee, quantity}: CheckoutItemProps) {

    const { image, title, price, id } = coffee; 
    const { removeFromCart } = useCart();

    const formatedTotalPrice = (price * quantity).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    function handleRemoveFromCart() {
        removeFromCart(id);
    }

    return(
        <CheckoutItemContainer>
            <img src={image} alt="Imagem de uma chicara de café" />
            <CheckoutItensContent>
                <h3>{title}</h3>
                <div className="buttons-group">
                    <CheckoutItemQuantity>
                        <button className="btnMinus">
                            <Minus size={14} weight="bold" />
                        </button>
                        <span>{quantity}</span>
                        <button className="btnPlus">
                            <Plus size={14} weight="bold" />
                        </button>
                    </CheckoutItemQuantity>
                    <CheckoutItemRemove onClick={handleRemoveFromCart}>
                        <Trash size={16} weight="regular" />
                        Remover
                    </CheckoutItemRemove>
                </div>
            </CheckoutItensContent>
            <div className="checkout-item-price">
                <span>{formatedTotalPrice}</span>
            </div>
        </CheckoutItemContainer>
    )
}