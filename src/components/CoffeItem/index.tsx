import { useState } from "react";
import { CoffeItemContainer, CoffeItemForm, CoffeTagSpan, ShoppingCartIconContainer, ButtonItemFormDiv } from "./styles";
import { Plus, Minus, ShoppingCartSimple } from "phosphor-react";
import { useCart } from "../../context/ContextGlobal";

export interface CoffeItemProps {
    title: string
    description: string
    price: number
    image: string
    tag: string[]
    
}

export interface CartItem {
    title: string
    description: string
    price: number
    image: string
    quantity: number
}


export function CoffeItem({title, description, price, image, tag }: CoffeItemProps) {
    const [quantity, setQuantity] = useState(1)
    const {AddToGlobalCart}= useCart()
    
    const increase = () => {
        setQuantity(state => state + 1)
    } 
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(state => state - 1)
        }
    }
 
    const handleAddToCart = (itemToAdd: CartItem): void => { 
        AddToGlobalCart(itemToAdd)
        
    }

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
                    <button onClick={decrement}> <strong><Minus size={18} /></strong></button><span>{quantity}</span>
                    <button onClick={increase}><strong><Plus size={18} /></strong></button>
                </ButtonItemFormDiv>
                
                <ShoppingCartIconContainer  >
                    <ShoppingCartSimple  onClick={() => handleAddToCart({title, price, quantity, description, image})} size={24} />
                </ShoppingCartIconContainer>
                               
            </CoffeItemForm>
        </CoffeItemContainer>
    )
}