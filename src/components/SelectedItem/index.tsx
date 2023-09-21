import { RemoveButtonContainer, SelectedItemButtonContainer, SelectedItemTitleContainer,SelectedItemsDivContainer, SpanLine} from "./styles"
import { Trash } from "phosphor-react"
import { useCart } from '../../context/ContextGlobal'


export function SelectedItem() {

    const { cart, AddToGlobalCart} = useCart()

    


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
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>             
                </SelectedItemButtonContainer>                    
                <RemoveButtonContainer>
                    <button onClick={() => AddToGlobalCart(item)}> <Trash color="#8047f8" />  REMOVER </button>
                </RemoveButtonContainer>                 
                <span> R$ <strong>{(item.price * item.quantity).toFixed(2)}</strong></span>
                </SelectedItemsDivContainer> 
                <SpanLine />
            </div>
          ))}  
        </>
      );


}
