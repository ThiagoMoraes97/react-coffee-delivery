import { HeaderContainer, OrderInfo, Location, Cart } from "./style";
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
    return(
        <HeaderContainer>
            <img src={logo} alt="Imagem de uma embalagem de copo de café roxo, com Coffee Delivery escrito ao lado." />
            <OrderInfo>
                <Location>
                    <MapPin size={22} weight="fill" />
                    <p>Porto Alegre, RS</p>
                </Location>
                <Cart>
                    <ShoppingCart size={22} weight="fill" />
                </Cart>
            </OrderInfo>
        </HeaderContainer>
    )
}