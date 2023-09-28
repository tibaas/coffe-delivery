import { styled } from "styled-components";

export const CheckoutContainer = styled.div `
    width: 90rem;
    padding: 6rem;
    display: grid;
    grid-template-columns: 43rem auto;
    
    h3 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['base-subtitle']};

    }

`
export const TitleSection = styled.h3`
    margin-bottom: 1rem;


`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  p {
    font-family: 'Roboto', sans-serif;
  }
  

`

export const TotalP = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => props.theme['base-subtitle']};



`

export const SelectedItemsContainer = styled.div`
    
    width: 28rem;
    max-height: 100%;
    min-height: 37rem;
    background: ${props => props.theme['background']}; 
    border-top-left-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 44px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
       
`
export const LabelContainer = styled.div`

    width: 100%;
    height: 100%;
    padding: 3rem;
    
    
    button {
      width: 23rem;
      height: 3rem;
      border: 0;
      cursor: pointer;
      border-radius: 6px;
      margin-top: 2rem;
      background: ${props => props.theme['yellow']};
      color: white;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 1rem;
      &:disabled {
        cursor:not-allowed;
        background: silver;
        &:hover {
          background: #e23;
        }
      }

      &:hover {
        background: ${props => props.theme['yellow-dark']}
      }

    
    }

`



export const CheckoutFormContainer = styled.div`
    width: 40rem;
    height: 25rem;
    background: ${props => props.theme['background']};  
    padding: 2rem;
    border-radius: 10px;


    img {
            position: absolute;
        }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;       
    }

    header {
        margin-bottom: 3rem;
        font-family: 'Roboto', sans-serif;
        font-size: 0.750rem;

        > span {
            font-size: 1rem;
            margin-left: 28px;
            line-height: 30px;
            color: ${props => props.theme['base-subtitle']};       
        }

        p {
            margin-left: 28px;
            color: ${props => props.theme['base-text']};          
        }    
    }

    input {
        height: 42px;
        background: ${props => props.theme['base-input']};
        border:0;
        border-radius: 5px;
        outline:none;
        text-indent: 10px;
          &:focus{
            border: 1px solid ${props => props.theme['yellow-dark']};
        }
        
         &::placeholder{
           display: flex;
           align-items: center;
           font-family: 'Roboto', sans-serif;
           font-size: 12px
        }
    }


`
export const IconPaymentContainer = styled.div`
    position: absolute;
`
export const CheckoutPaymentContainer = styled.div`
    width: 40rem;
    height: 12rem;
    padding: 2rem;
    margin-top: 4.5rem;
    
    
    border-radius: 10px;
    background: ${props => props.theme['background']};
    font-family: 'Roboto', sans-serif;
    margin-left: -2rem;
    

    > span {
        font-size: 1rem;
        margin-left: 27px;
        margin-bottom: 5px;
        
        color: ${props => props.theme['base-subtitle']};
        
    }
    > p {
        
        font-size:0.750rem;
        margin-left: 27px;
        line-height: 25px;
        color: ${props => props.theme['base-text']};
        
    }


`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    
    button {
        width: 11rem;
        height: 3rem;
        border: 0;
        border-radius: 6px;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['base-text']};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        &:focus {
          background: ${props => props.theme['purple-light']};
          border: 1px solid ${props => props.theme['purple']};
        }

        &:hover {
            background: ${props => props.theme['base-hover']}
        }
    }

`

/* Style for form/inputs container */

export const CustomInputContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  
`

export const CustomInput = styled.input`
  width: 100%;
  height: 42px;
  background: ${props => props.theme['base-input']};
  border: 0;
  border-radius: 5px;
  outline: none;
  text-indent: 10px;

`

export const InputPrefix = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: ${props => props.theme['base-text']}; 
  
`

export const InputSuffix = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-style: italic;
  font-size: 11px;
  color: ${props => props.theme['base-text']}; 
  
  
`

export const InputColumn = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
`
export const InputRow = styled.div`
  display: flex;
  gap: 1rem;


`
export const CepInput = styled.input`
  flex: 0.325;
`
export const RuaInput = styled.input`
  flex: 3;
`
export const NumeroInput = styled.input`
  flex: 1;
`
export const ComplementoInput = styled.input`
  flex: 2;
`
export const BairroInput = styled.input`
  flex: 2;
`
export const CidadeInput = styled.input`
  flex: 2;
`;
export const UfInput = styled.input`
  flex: 1;
`