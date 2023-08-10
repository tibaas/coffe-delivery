import { Header } from "../Header"
import { IntroContainer, SpanContainer } from "./styles"
import CoffeLogo from '../../assets/Coffe-image.svg'
import cartSpan from '../../assets/Icon-cart.svg'
import coffeSpan from '../../assets/Icon-coffe.svg'
import timeSpan from '../../assets/Icon-time.svg'
import packetSpan from '../../assets/Icon-packet.svg'


export function Intro() {
    return (
        <>
            <Header />
            <IntroContainer>
                <div>
                    <h1>
                        Encontre o café perfeito <br />
                        para qualquer hora do dia
                    </h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver e a qualquer hora!</span>
                    <SpanContainer>
                        <div>
                            <span>Compra simples e segura</span>
                            <img src={cartSpan} alt="" />                          
                        </div>
                        <div>
                            <span>Entrega rápida e rastreada</span>
                            <img src={timeSpan} alt="" />
                        </div>
                        <div>
                            <span>Embalagem mantém o café intacto</span>
                            <img src={packetSpan} alt="" />
                        </div>
                        <div>
                            <span>Café fresquinho até você</span>
                            <img src={coffeSpan} alt="" />
                        </div>
                    </SpanContainer>
                </div>
                <img src={CoffeLogo} alt="" />
            </IntroContainer>
        </>
    )
}
