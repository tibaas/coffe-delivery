import { styled } from "styled-components";

export const CoffeItemContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

    width: 17.2rem;
    height: 20rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    background: ${props => props.theme['base-card']};

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    

    img {
        margin-bottom: 1.2rem;
        width: 7.5rem;
        height: 7.5rem;
    }

    h3 {
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.3rem;
        
       
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        color: ${props => props.theme['base-label']};
        text-align: center;  
        margin-bottom: 1rem;  
    }

 
`

export const CoffeItemForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 2rem;
     
    button {
        
        width:2rem;
        height: 2rem;
        border: 0;
        border-radius:5px;
        font-size: 1.8rem;
        background: ${props => props.theme['base-button']};
        color: ${props => props.theme['purple']};
        cursor: pointer;   
    }

     span {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.4rem;   
        color: ${props => props.theme['base-text']};
        
    }   

`

export const ButtonItemFormDiv = styled.div `


        background: ${props => props.theme['base-button']};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:10px;
        
         span {
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;       
        }
`

export const ShoppingCartIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 0;
    border-radius: 5px;
    color: white;
    background: ${props => props.theme['purple-dark']};
    cursor: pointer;


`

export const CoffeTagSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 75px;
    min-height: 21px;
    border-radius: 10px;
    background: ${props => props.theme['yellow-light']};
    color:  ${props => props.theme['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.650rem;
    font-weight: bold;
    
    margin-bottom: 2.5rem;


`