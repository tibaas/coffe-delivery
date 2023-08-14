import { styled } from "styled-components";

export const CoffeListContainer = styled.div`

    width: 90rem;
    height: 100%;
    padding: 6rem;
    gap: 3rem;

    background: ${props => props.theme['background']};
    display: flex;
    align-items: center;
    justify-content: space-around;





`

export const TitleContainer = styled.div `

    
    background: ${props => props.theme['background']};

    h1 {
        font-family:'Baloo 2', sans-serif ;
        color: ${props => props.theme['base-subtitle']};
        margin-left: 6rem;
        
    }



`