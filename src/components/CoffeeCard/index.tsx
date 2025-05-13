import { CoffeeCardContainer, CoffeeTags, CoffeeTagsGroup, CoffeeCartInfo } from "./style";
import { ShoppingCart, Plus, Minus } from "@phosphor-icons/react";
import { Coffee } from "../../data/coffees";

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {

    const { image, tags, title, description, price } = coffee;

    const formatted = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

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
            <div className="coffee-quantity">
                <button className="btnMinus">
                    <Minus size={14} weight="bold" />
                </button>
                <span>1</span>
                <button className="btnPlus">
                    <Plus size={14} weight="bold" />
                </button>
            </div>
            <button className="btnAddToCart">
                <ShoppingCart size={22} weight="fill" />
            </button>
        </CoffeeCartInfo>

    </CoffeeCardContainer>
  )
}