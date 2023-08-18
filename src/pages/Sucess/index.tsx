import { Container, SpanDivContainer,ImageContainer } from "./style";
import motinha from '../../assets/moto-image.svg'
import LocationIcon from '../../assets/Icon-location-sucess.svg'
import TimeIcon from '../../assets/Icon-time.svg'
import MoneyIcon from '../../assets/Icon-money-sucess.svg'
export function SucessCheckout() {
    return (
        <Container>
            <div>
                <h1> Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <SpanDivContainer>  
                    <div>
                        <img src={LocationIcon} alt="" />
                        <span>Entrega em <strong>Rua Manoel Rodrigues Campos, 114</strong></span>
                        <p>São Sebastião - Ouricuri, PE</p>
                    </div>
                    <div>
                        <img src={TimeIcon} alt="" />
                        <span>Previsão de entrega</span>
                        <span><strong>20 min - 30 min</strong></span>
                    </div>
                    <div>
                        <img src={MoneyIcon} alt="" />
                        <span>Pagamento na entrega</span>
                        <span><strong>Cartão de Crédito</strong></span>
                    </div>
                </SpanDivContainer>
            </div>
            <ImageContainer>
                <img src={motinha} alt="" />
            </ImageContainer>

        </Container>
    )
}