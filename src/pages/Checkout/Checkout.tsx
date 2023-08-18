import { BairroInput, 
    ButtonsContainer, 
    CepInput, 
    CheckoutContainer, 
    CheckoutFormContainer, 
    CheckoutPaymentContainer, 
    CidadeInput, 
    ComplementoInput, 
    IconPaymentContainer, 
    InputRow, 
    NumeroInput, 
    RuaInput, 
    UfInput,
    SelectedItemsContainer, 
    TitleSection,
    SelectedItem,
    SelectedItemTitleContainer,
    SelectedItemButtonContainer,
    RemoveButtonContainer,
    SpanLine,
    LabelContainer,
    TextContainer
} from "./styles";
import Icon from '../../assets/location-checkout-icon.svg'
import { CreditCard, Bank, Money, CurrencyDollar, Trash } from "phosphor-react";
import Coffe from '../../assets/expresso-tradicional.svg'

export function Checkout() {
    return (
    <>
            <CheckoutContainer>
            <TitleSection>
                <h3>Complete seu pedido</h3>
            </TitleSection>
            <TitleSection>
                <h3>Cafés selecionados</h3>
            </TitleSection>            

            <CheckoutFormContainer>
                    <img src={Icon} alt="" />
                <header>
                    <span>Endereço de entrega</span>
                    <p>Informe o endereço onde você deseja receber o pedido</p>  
                </header>
                <section>
                    <form action="">
                        <InputRow>
                            <CepInput type="text" placeholder="CEP" />
                        </InputRow>
                        <InputRow>
                            <RuaInput type="text" placeholder="Rua" />
                        </InputRow>
                        <InputRow>
                            <NumeroInput type="text" placeholder="Número" />
                            <ComplementoInput type="text" placeholder="Complemento                                                                             Opcional" />
                        </InputRow>
                        <InputRow>
                            <BairroInput type="text" placeholder="Bairro" />
                            <CidadeInput type="text" placeholder="Cidade" />
                            <UfInput type="text" placeholder="UF" />
                    </InputRow>
                    </form>
                </section>

                <section>

                <CheckoutPaymentContainer>
                    <IconPaymentContainer>
                        <CurrencyDollar  size={25} color="#8047f8" /> 
                    </IconPaymentContainer>
                    <span> Pagamento</span>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <ButtonsContainer>
                        <button> <CreditCard size={15} color="#8047f8"/> CARTÃO DE CRÉDITO</button>
                        <button> <Bank size={15} color="#8047f8" /> CARTÃO DE DÉBITO</button>
                        <button> <Money size={15} color="#8047f8" />  DINHEIRO</button>
                    </ButtonsContainer>
                </CheckoutPaymentContainer>
                    
                </section>
            </CheckoutFormContainer>

            <SelectedItemsContainer>
                <SelectedItem>
                    <img src={Coffe} alt="" />
                    <SelectedItemTitleContainer>
                            <p>Expresso Tradicional</p>          
                    </SelectedItemTitleContainer> 
                    <SelectedItemButtonContainer>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button> 
                                 
                    </SelectedItemButtonContainer>                    
                        <RemoveButtonContainer>
                            <button > <Trash color="#8047f8" />  REMOVER </button>
                        </RemoveButtonContainer>                 
                        <span> R$ <strong> 9,90 </strong></span>

                </SelectedItem>
                <SpanLine>

                </SpanLine>
                <SelectedItem>
                    <img src={Coffe} alt="" />
                    <SelectedItemTitleContainer>
                            <p>Expresso Tradicional</p>          
                    </SelectedItemTitleContainer> 
                    <SelectedItemButtonContainer>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button> 
                                 
                    </SelectedItemButtonContainer>                    
                        <RemoveButtonContainer>
                            <button > <Trash color="#8047f8" />  REMOVER </button>
                        </RemoveButtonContainer>                 
                        <span> R$ <strong> 9,90 </strong></span>

                </SelectedItem>
                <SpanLine>

                </SpanLine>
                
                <LabelContainer>
                    <TextContainer>
                        <p>Total de itens</p>
                        <p>R$ 19,80</p>
                    </TextContainer>
                    <TextContainer>
                        <p>Entrega</p>
                        <p>R$3,50</p>
                    </TextContainer>                       
                    <TextContainer>
                        <p>Total</p>
                        <p>R$ 23,30</p>
                    </TextContainer>
                        <button> CONFIRMAR PEDIDO </button>                                      
                </LabelContainer>                            
            </SelectedItemsContainer>

            

        </CheckoutContainer>

    </>
    )
}


