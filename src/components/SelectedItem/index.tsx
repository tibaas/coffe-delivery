import { RemoveButtonContainer, SelectedItemButtonContainer, SelectedItemTitleContainer,SelectedItemsDivContainer, SpanLine} from "./styles"
import { Trash } from "phosphor-react"
import { useCart } from '../../context/ContextGlobal'
import { CartItem } from "../CoffeItem"


export function SelectedItem() {

    const {cart, AddToGlobalCart} = useCart()

    const incrementQuantity = (item: CartItem) => {
      AddToGlobalCart({...item, quantity: + 1})
    }
    const decrementQuantity = (item: CartItem) => {
      if (item.quantity > 1) {
        AddToGlobalCart({...item, quantity: -1})
      }
    }
    return (
        <>
          {cart.map((item, index) => (
            <div key={index}>
                <SelectedItemsDivContainer >
                <img src={item.image} alt={item.title} />
                <SelectedItemTitleContainer>
                    <p>{item.title}</p>          
                </SelectedItemTitleContainer> 
                <SelectedItemButtonContainer>
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item)} >+</button>             
                </SelectedItemButtonContainer>                    
                <RemoveButtonContainer>
                    <button> <Trash color="#8047f8" />  REMOVER </button>
                </RemoveButtonContainer>                 
                <span> R$ <strong>{(item.price * item.quantity).toFixed(2)}</strong></span>
                </SelectedItemsDivContainer> 
                <SpanLine />
            </div>
          ))}  
        </>
      );


}
