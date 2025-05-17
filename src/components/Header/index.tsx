import { HeaderContainer, OrderInfo, Location, Cart } from "./style";
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {

    const { cartItems } = useCart();
    const navigate = useNavigate();

    let cartQuantity = 0;

    if (cartItems && cartItems.length > 0) {
        cartQuantity = cartItems.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
    }

    function handleNavigateToChekout() {
        navigate('/checkout')
    }

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
                <Cart onClick ={handleNavigateToChekout}>
                    <span>{cartQuantity}</span>
                    <ShoppingCart size={22} weight="fill" />
                </Cart>
            </OrderInfo>
        </HeaderContainer>
    )
}