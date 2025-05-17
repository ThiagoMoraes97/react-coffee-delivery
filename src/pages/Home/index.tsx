import { HomeContainer, BannerContent, CoffeeList, BannerInfo, BannerItens, CoffeeInfo } from "./style"
import  bannerImg from "../../assets/bannerImg.png"
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { CoffeeCard } from "../../components/CoffeeCard"
import { coffees } from "../../data/coffees"

export function Home() {
  return (
    <HomeContainer>
      <BannerContent>
        <BannerInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <BannerItens>

            <div className="banner-item-left">
              <div className="banner-item-info">
                <span><ShoppingCart size={16} weight="fill"/></span>
                <p>Compra simples e segura</p>
              </div>

              <div className="banner-item-info">
                <span><Timer size={16} weight="fill" /></span>
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>

            <div className="banner-item-right">
              <div className="banner-item-info">
                <span><Package size={16} weight="fill" /></span>
                <p>Embalagem mantém o café intacto</p>
              </div>

              <div className="banner-item-info">
                <span><Coffee size={16} weight="fill" /></span>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>

          </BannerItens>
        </BannerInfo>

        <img src={bannerImg} alt="Imagem de um copo de café, com grãos de café ao redor" />

      </BannerContent>

      <CoffeeInfo>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
        
      </CoffeeInfo>
    </HomeContainer>
  )
}

