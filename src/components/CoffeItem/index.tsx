import { useState } from "react";
import { CoffeItemContainer, CoffeItemForm, CoffeTagSpan, ShoppingCartIconContainer, ButtonItemFormDiv } from "./styles";
import { Plus, Minus, ShoppingCartSimple } from "phosphor-react";
import { useCart } from "../../context/ContextGlobal";

interface CoffeItemProps {
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

    const [cart, setCart] = useState<CartItem[]>([])
    const [quantity, setQuantity] = useState(1)
    const {AddToGlobalCart}= useCart()
    
    const Increase = () => {
        setQuantity(state => state + 1)
    } 
    const Decrement = () => {
        if (quantity > 1) {
            setQuantity(state => state - 1)
        }
    }
    const HandleAddToCart = (itemToAdd: CartItem): void => {
        const existingItemIndex = cart.findIndex(
            (item: CartItem) => item.title === itemToAdd.title
        )


        if (existingItemIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existingItemIndex].quantity += itemToAdd.quantity
            setCart(updatedCart)
        } else {
            setCart([...cart, itemToAdd])
        }
        
        
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
                    <button onClick={Decrement}> <strong><Minus size={18} /></strong></button><span>{quantity}</span>
                    <button onClick={Increase}><strong><Plus size={18} /></strong></button>
                </ButtonItemFormDiv>
                
                <ShoppingCartIconContainer>
                    <ShoppingCartSimple onClick={() => HandleAddToCart({title, price, quantity, description, image})} size={24} />
                </ShoppingCartIconContainer>
                               
            </CoffeItemForm>
        </CoffeItemContainer>
    )
}