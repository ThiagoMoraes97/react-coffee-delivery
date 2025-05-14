import { CheckoutContainer, CheckoutAdressInfo, CheckoutInfo, CheckoutItens, CheckoutPaymentInfo, CheckoutAdressInput, CheckoutItensInfo, CheckoutPaymentMethodsItens, CheckoutPaymentMethods } from "./style";
import { CheckoutItem } from "../../components/CheckoutItem";
import { CurrencyDollar, MapPin, CreditCard, Money, Bank } from "@phosphor-icons/react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutInfo>
        <h2>Complete seu pedido</h2>

        <CheckoutAdressInfo>
          <header>
            <MapPin size={22} color="#C47F17" />
            <div className="header-info">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <div className="input-group">
            <CheckoutAdressInput type="text" placeholder="CEP" />
            <CheckoutAdressInput type="text" placeholder="Rua" />
            <div className="input-small-group">
              <CheckoutAdressInput type="text" placeholder="Número" />
              <CheckoutAdressInput type="text" placeholder="Complemento" />
            </div>
            <div className="input-small-group">
              <CheckoutAdressInput type="text" placeholder="Bairro" />
              <CheckoutAdressInput type="text" placeholder="Cidade" />
              <CheckoutAdressInput type="text" placeholder="UF" />
            </div>
          </div>
        </CheckoutAdressInfo>

        <CheckoutPaymentInfo>
          <header>
              <CurrencyDollar size={22} color="#8047F8" />
              <div className="header-info">
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
          </header>
      
    
          <CheckoutPaymentMethods columns={{ initial: "1", sm: "3" }}>
            <CheckoutPaymentMethodsItens value="credit-card">
              <CreditCard size={22} color="#8047F8" />
              <span>Cartão de crédito</span>
            </CheckoutPaymentMethodsItens>

            <CheckoutPaymentMethodsItens value="debit-card">
              <Bank size={22} color="#8047F8" />
              <span>Cartão de débito</span>
            </CheckoutPaymentMethodsItens>

            <CheckoutPaymentMethodsItens value="money">
              <Money size={22} color="#8047F8" />
              <span>Dinheiro</span>
            </CheckoutPaymentMethodsItens>
      
          </CheckoutPaymentMethods>

        </CheckoutPaymentInfo>
 
      </CheckoutInfo>

      <CheckoutItens>

        <h2>Cafés selecionados</h2>

        <CheckoutItensInfo>
          <div className="checkout-items-list">
            <CheckoutItem />
            <CheckoutItem />
          </div>

          <div className="checkout-total">
            <p>Total de itens <span>29,70</span></p>
            <p>Total de entrega <span>3,50</span></p>
            <p>Total <span>33,20</span></p>
          </div>

          <button type="submit">Confirmar pedido</button>
        </CheckoutItensInfo>

      </CheckoutItens>
    </CheckoutContainer>
  )                 
} 