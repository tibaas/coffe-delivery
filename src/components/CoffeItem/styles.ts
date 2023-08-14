import { styled } from "styled-components";

export const CoffeItemContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

    width: 17rem;
    height: 20rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    background: ${props => props.theme['base-card']};
    

    img {
        margin-bottom: 2rem;
        
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
    gap: 10px;
    margin-bottom: 2rem;
    
    button {
        
        width:2.5rem;
        height: 2rem;
        border:0;
        font-size: 1.8rem;
        background: ${props => props.theme['base-button']};
        color: ${props => props.theme['purple']};
        cursor: pointer;   
    }

    div {
        background: ${props => props.theme['base-button']};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        
        

        > span {
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            
        }
        
    }

    span {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.6rem;   
        color: ${props => props.theme['base-text']};
        
    }

`

export const CoffeTagSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    min-height: 21px;
    border-radius: 10px;
    background: ${props => props.theme['yellow-light']};
    color:  ${props => props.theme['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.650rem;
    font-weight: bold;
    
    margin-bottom: 2.5rem;


`