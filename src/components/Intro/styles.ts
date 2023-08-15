import { styled } from "styled-components";

export const IntroContainer = styled.div`
    width: 90rem;
    height: 34rem;
    background: ${props => props.theme['background']};
    padding: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;

    img {
        display: block;
               
    }

    h1 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['base-title']};
        font-size: 3rem ;
        line-height: 3rem;            
        
    }

     span   {
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.2rem;
        display: inline-block;
        margin-top: 1.5rem;
        
       
    }

`
export const SpanContainer = styled.div`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    line-height: 15px;
    gap: 1.5rem;

    span {
        
        position: absolute;
        margin-top: 10px;
        font-size:1rem;
        margin-left: 40px;
       
    }
    


`
