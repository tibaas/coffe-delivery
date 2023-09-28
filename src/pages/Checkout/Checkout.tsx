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
import { CreditCard, Bank, Money, CurrencyDollar, Warning} from "phosphor-react";
import { SelectedItem } from "../../components/SelectedItem";
import { NavLink, useNavigate} from "react-router-dom";
import { useCart } from "../../context/ContextGlobal";
import { useForm } from 'react-hook-form'
import { useState } from 'react'


export function Checkout() {
    const { cart, ResetCart } = useCart();
    const [selectedPayment, setSelectedPayment] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const {register, handleSubmit, reset, watch, formState: { errors }} = useForm()
    const deliveryCost = 3.50;
    const totalItemsCost = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    const totalCost = totalItemsCost + deliveryCost;
    const navigate = useNavigate()

    const handlePaymentClick = (paymentMethod: string) => {
        setSelectedPayment(paymentMethod);
        setIsButtonEnabled(true)
      };

      //checking if form fields are fulfilled
      const ufWatching = watch('uf')
      const streeWatching = watch('street')
      const numberWatching = watch('houseNumber')
      const cityWatching = watch('city')
      const cepWatching = watch('cep')

    const HandleCreateNewForm = (formData : object): void => {
        navigate('/sucess', {state: {...formData, selectedPayment}})
        ResetCart()
        reset()
    }
 
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
                            <CepInput {...register("cep", { minLength: {value: 8, message: 'error'}, required: true})}  
                            type="number" 
                            placeholder="CEP" />
                            {errors.cep && 
                            <span style={{color: "red", marginTop:'5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
                                <Warning style={{marginBottom: '5px', marginRight: '10px'}} size={25} /> Informe um CEP válido! 
                            </span>}
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
                            <UfInput                           
                            type="text" 
                            placeholder="UF"
                            {...register('uf', { maxLength: {value: 2, message: 'error'}, required: true, minLength: {value: 2, message:'error'}})}
                             />
                            {errors.uf && 
                            <span style={{color: "red", marginTop:'5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
                                <Warning style={{marginBottom: '5px', marginRight: '10px'}} size={25} /> UF Apenas 2 caracteres! 
                            </span>}
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
                        <button  onClick={() => handlePaymentClick('DINHEIRO')} > <Money size={15} color="#8047f8" />  DINHEIRO</button>
                        <button  onClick={() => handlePaymentClick('CARTÃO DE CRÉDITO')} > <CreditCard size={15} color="#8047f8"/> CARTÃO DE CRÉDITO</button>
                        <button  onClick={() => handlePaymentClick('CARTÃO DE DÉBITO')} > <Bank size={15} color="#8047f8" /> CARTÃO DE DÉBITO</button>
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
                        <button type='submit' disabled={!isButtonEnabled || !ufWatching || !numberWatching || !streeWatching || !cityWatching || !cepWatching}  onClick={handleSubmit(HandleCreateNewForm)} > CONFIRMAR PEDIDO </button>                                      
                    </NavLink>
                </LabelContainer>                            
            </SelectedItemsContainer>
        </CheckoutContainer>

    </>
    )
}


