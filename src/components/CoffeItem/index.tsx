import { CoffeItemContainer, CoffeItemForm, CoffeTagSpan, ShoppingCartIconContainer, ButtonItemFormDiv } from "./styles";
import { Plus, Minus, ShoppingCartSimple } from "phosphor-react";

interface CoffeItemProps {
    title: string
    description: string
    price: number
    image: string
    tag: string[]
    
}


export function CoffeItem({title, description, price, image, tag}: CoffeItemProps) {
    return (
        <CoffeItemContainer>
            <img src={image} alt={title} />
            <div>
                {tag.map((item, index) => 
                    <CoffeTagSpan key={index}>{item}</CoffeTagSpan>
                )}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <CoffeItemForm>
                <span>R$ <strong> {price.toFixed(2)} </strong></span>

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