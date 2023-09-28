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
    TitleSection,
    LabelContainer,
    TextContainer,
    SelectedItemsContainer,
    TotalP,
} from "./styles";
import Icon from '../../assets/location-checkout-icon.svg'
import { CreditCard, Bank, Money, CurrencyDollar,} from "phosphor-react";
import { SelectedItem } from "../../components/SelectedItem";
import { NavLink, useNavigate} from "react-router-dom";
import { useCart } from "../../context/ContextGlobal";
import { useForm } from 'react-hook-form'



export function Checkout() {
    const { cart, ResetCart } = useCart();
    const deliveryCost = 3.50;
    const totalItemsCost = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    const totalCost = totalItemsCost + deliveryCost;

    const {register, handleSubmit, reset, watch} = useForm()
    const navigate = useNavigate()

    const HandleCreateNewForm = (data : object): void => {
        navigate('/sucess', {state: data, })
        ResetCart()
        reset()
    }

    const street = watch('city')

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
                    <form onSubmit={handleSubmit(HandleCreateNewForm)} action="">
                        <InputRow>
                            <CepInput type="number" placeholder="CEP" />
                        </InputRow>
                        <InputRow>
                            <RuaInput 
                                type="text" 
                                placeholder="Endereço"
                                {...register('street')}                        
                            />
                        </InputRow>
                        <InputRow>
                            <NumeroInput
                                type="number" 
                                placeholder="Número" 
                                {...register('houseNumber')} 
                            />
                            <ComplementoInput type="text" placeholder="Complemento                                                                             Opcional" />
                        </InputRow>
                        <InputRow>
                            <BairroInput
                                type="text" 
                                placeholder="Bairro" 
                                {...register('bairro')} 
                            />
                            <CidadeInput
                                type="text" 
                                placeholder="Cidade" 
                                {...register('city')}
                            />
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
                
                            <SelectedItem/>
                
                
                <LabelContainer>
                    <TextContainer>
                        <p>Total de itens</p>
                        <p>R$ {totalItemsCost.toFixed(2)}</p>
                    </TextContainer>
                    <TextContainer>
                        <p>Entrega</p>
                        <p>R${deliveryCost.toFixed(2)}</p>
                    </TextContainer>                       
                    <TextContainer>
                        <TotalP>Total</TotalP>
                        <TotalP>R$ {totalCost.toFixed(2)}</TotalP>
                    </TextContainer>
                    <NavLink to='/sucess'>
                        <button type='submit' disabled={!street}  onClick={handleSubmit(HandleCreateNewForm)} > CONFIRMAR PEDIDO </button>                                      
                    </NavLink>
                </LabelContainer>                            
            </SelectedItemsContainer>

            

        </CheckoutContainer>

    </>
    )
}


