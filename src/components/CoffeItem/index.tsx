import { CoffeItemContainer, CoffeItemForm, CoffeTagSpan } from "./styles";
import TraditionalCoffe from '../../assets/expresso-tradicional.svg'


export function CoffeItem() {
    return (
        <CoffeItemContainer>
            <img src={TraditionalCoffe} alt="" />
            <CoffeTagSpan>TRADICIONAL</CoffeTagSpan>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <CoffeItemForm>
                <span>R$ <strong>9,90</strong></span>
                <div>
                    <button> <strong>-</strong></button><span>1</span><button><strong>+</strong></button>
                </div>
            </CoffeItemForm>
        </CoffeItemContainer>
    )
}