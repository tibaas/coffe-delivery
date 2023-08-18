import { Container, SpanDivContainer,ImageContainer, TextContainer } from "./style";
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
                    <TextContainer>
                        <img src={LocationIcon} alt="" />
                        <span>
                            Entrega em <strong>Rua Manoel Rodrigues Campos, 114<br /></strong>
                            São Sebastião - Ouricuri, PE
                        </span>
                    </TextContainer>
                    <TextContainer>
                        <img src={TimeIcon} alt="" />
                        <span>
                            Previsão de entrega<br />
                            <strong>20 min - 30 min</strong>
                        </span>
                    </TextContainer>
                    <TextContainer>
                        <img src={MoneyIcon} alt="" />
                        <span>
                            Pagamento na entrega<br />
                            <strong>Cartão de Crédito</strong>
                        </span>
                    </TextContainer>                              
                </SpanDivContainer>
                        </div>
                    <ImageContainer>
                        <img src={motinha} alt="" />
                    </ImageContainer>
        </Container>
    )
}