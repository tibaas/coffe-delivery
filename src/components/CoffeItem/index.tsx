import { CoffeItemContainer, CoffeItemForm, CoffeTagSpan, ShoppingCartIconContainer, ButtonItemFormDiv } from "./styles";
import TraditionalCoffe from '../../assets/expresso-tradicional.svg'
import { Plus, Minus, ShoppingCartSimple } from "phosphor-react";


export function CoffeItem() {
    return (
        <CoffeItemContainer>
            <img src={TraditionalCoffe} alt="" />
            <CoffeTagSpan>TRADICIONAL</CoffeTagSpan>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <CoffeItemForm>
                <span>R$ <strong>9,90</strong></span>

                <ButtonItemFormDiv>
                    <button> <strong><Minus size={18} /></strong></button><span>1</span><button><strong><Plus size={18} /></strong></button>
                </ButtonItemFormDiv>
                
                <ShoppingCartIconContainer>
                    <ShoppingCartSimple size={24} />
                </ShoppingCartIconContainer>
                
                    
            </CoffeItemForm>
        </CoffeItemContainer>
    )
}