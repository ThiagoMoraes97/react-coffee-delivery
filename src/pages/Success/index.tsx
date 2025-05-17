import { SuccessContainer, SuccessContent, SuccessContentInfo } from "./style";
import successImg from "../../assets/success.png";
import { MapPin, CurrencyDollar, Timer } from "@phosphor-icons/react";


export function Success() {
  return (
    <SuccessContainer>

      <SuccessContent>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <SuccessContentInfo>
          <div className="adress-info">
            <span>
              <MapPin size={16} color="#FAFAFA" weight="fill" />
            </span>
            <div className="adress-info-content">
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div className="delivery-info">
            <span>
              <Timer size={16} color="#FAFAFA" weight="fill" />
            </span>
            <div className="delivery-info-content">
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div className="payment-info">
            <span>
              <CurrencyDollar size={16} color="#FAFAFA" />
            </span>
            <div className="payment-info-content">
              <p>Pagamento na entrega</p>
              <strong>Cartão de crédito</strong>
            </div>
          </div>

        </SuccessContentInfo>
      </SuccessContent>

      <img src={successImg} alt="Ilustração de um entregador" />
      
    </SuccessContainer>
  )
}