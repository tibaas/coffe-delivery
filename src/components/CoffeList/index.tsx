
import { CoffeItem } from "../CoffeItem";
import { CoffeListContainer, TitleContainer } from "./styles";

export function CoffeList() {
    return (
        <>
            <TitleContainer>
                <h1>Nossos cafés</h1>
            </TitleContainer>        
            <CoffeListContainer>
                <CoffeItem />
                <CoffeItem /> 
                <CoffeItem />
                <CoffeItem />                  
            </CoffeListContainer>
        </>
    )
}