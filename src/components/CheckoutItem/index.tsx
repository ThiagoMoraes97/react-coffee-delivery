import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CheckoutItemContainer, CheckoutItensContent, CheckoutItemQuantity, CheckoutItemRemove  } from "./style";

export function CheckoutItem(){
    return(
        <CheckoutItemContainer>
            <img src="coffee1.png" alt="Imagem de uma chicara de café" />
            <CheckoutItensContent>
                <h3>Expresso Tradicional</h3>
                <div className="buttons-group">
                    <CheckoutItemQuantity>
                        <button className="btnMinus">
                            <Minus size={14} weight="bold" />
                        </button>
                        <span>1</span>
                        <button className="btnPlus">
                            <Plus size={14} weight="bold" />
                        </button>
                    </CheckoutItemQuantity>
                    <CheckoutItemRemove>
                        <Trash size={16} weight="regular" />
                        Remover
                    </CheckoutItemRemove>
                </div>
            </CheckoutItensContent>
            <div className="checkout-item-price">
                <span>R$ 9,90</span>
            </div>
        </CheckoutItemContainer>
    )
}