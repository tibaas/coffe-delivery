import { Container, SpanDivContainer,ImageContainer, TextContainer } from "./style";
import deliverySucessImage from '../../assets/moto-image.svg'
import LocationIcon from '../../assets/Icon-location-sucess.svg'
import TimeIcon from '../../assets/Icon-time.svg'
import MoneyIcon from '../../assets/Icon-money-sucess.svg'
import { useLocation } from "react-router-dom";
export function SucessCheckout() {
    const location = useLocation()
    const formData = location.state
    return (
        <Container>
            <div>
                <h1> Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <SpanDivContainer>  
                    <TextContainer>
                        <img src={LocationIcon} alt="" />
                        <span>
                            Entrega em <strong>{formData.street}, {formData.houseNumber}<br /></strong>
                            {formData.bairro} - {formData.city}, PE
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
                        <img src={deliverySucessImage} alt="" />
                    </ImageContainer>
        </Container>
    )
}