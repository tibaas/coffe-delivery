import { styled } from "styled-components";

export const Container = styled.div `

    padding: 6rem;
    width: 90rem;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['yellow-dark']}
    }
    
    p  {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
    }
       
`

export const SpanDivContainer = styled.div`
    width: 32rem;
    height: 16.6rem;
    padding: 1.9rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    border: 1px solid purple;
    margin-top: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    span {
        margin-left: 1rem;
        color: ${props => props.theme['base-text']}
    }

    img {
        width: 2.5rem;
        height: 2.5rem;     
    }
`

export const ImageContainer = styled.div`    
    margin-top: 6.5rem;
`
export const TextContainer = styled.div`
          
    display: flex;
    align-items: center;
    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    strong {
        font-weight: bold;
    }
   
`