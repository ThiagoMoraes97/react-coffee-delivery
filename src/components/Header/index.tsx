import { HeaderContainer, OrderInfo, Location, Cart } from "./style";
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logo} alt="Imagem de uma embalagem de copo de café roxo, com Coffee Delivery escrito ao lado." />
            </NavLink>    
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