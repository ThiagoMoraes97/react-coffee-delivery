import { HeaderContainer, OrderInfo, Location, Cart } from "./style";
import logo from '../../assets/logo.svg'

export function Header() {
    return(
        <HeaderContainer>
            <img src={logo} alt="Imagem de uma embalagem de copo de café roxo, com Coffee Delivery escrito ao lado." />
            <OrderInfo>
                <Location>

                </Location>
                <Cart>
                    
                </Cart>
            </OrderInfo>
        </HeaderContainer>
    )
}