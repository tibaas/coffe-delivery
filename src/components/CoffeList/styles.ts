import { styled } from "styled-components";

export const CoffeListContainer = styled.div`

    width: 90rem;
    height: 100%;
    padding: 6rem;
    gap: 3rem;
    flex-wrap: wrap;
    background: ${props => props.theme['background']};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    





`

export const TitleContainer = styled.div `

    
    background: ${props => props.theme['background']};

    h1 {
        font-family:'Baloo 2', sans-serif ;
        color: ${props => props.theme['base-subtitle']};
        margin-left: 6rem;
        
    }



`