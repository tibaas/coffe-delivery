import { RemoveButtonContainer, SelectedItemButtonContainer, SelectedItemTitleContainer,SelectedItemsDivContainer} from "./styles"
import { Trash } from "phosphor-react"
import CoffeImg from '../../assets/expresso-tradicional.svg'

export function SelectedItem() {

    return (
    
        <SelectedItemsDivContainer>
            <img src={CoffeImg} alt="" />
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
        </SelectedItemsDivContainer>        
        
    )



}