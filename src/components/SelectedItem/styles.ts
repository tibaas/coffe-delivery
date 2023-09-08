import { styled } from "styled-components"


export const SelectedItemButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 0;
  border-radius: 15px;
  margin-top: 2rem;
  
  
  
  font-family: 'Roboto', sans-serif;
  background: ${props => props.theme['base-button']};
  

  button {
        
        width: 1.7rem;
        height: 2rem;
        border:0;
        border-radius: 8px;
        font-size: 1.5rem;
        background: ${props => props.theme['base-button']};
        color: ${props => props.theme['purple']};
        cursor: pointer;  
        
        &:hover {
          color: ${props => props.theme['base-text']}
        }

       
    }

`
export const SelectedItemsDivContainer = styled.div`
    
    width:100%;
    min-height:7rem;
    gap: 5px;
    margin-bottom: 1rem;
    span:last-child{
      color: ${props => props.theme['base-text']};
      display: flex;
      font-family: 'Baloo 2', sans-serif;
      margin-bottom: 2.8rem;
      font-size: 1.1rem; 
    }
    
    
    display: flex;
    align-items: center;
    justify-content:center;
    

    img {
      width: 5rem;
      height: 5rem;
      margin-right: 2rem;
      
    }


`
export const SelectedItemTitleContainer = styled.div`
    background: red;
    width: 0;
    height: 0;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    margin-bottom: 4rem;
    
  
      
  p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      margin: 0;
      white-space: nowrap;
      /* overflow: hidden; 
      text-overflow: ellipsis;  */
    }

`

export const RemoveButtonContainer = styled.div`

    margin-top: 2rem;
    margin-right: 1rem;
    
    button {
      cursor: pointer;
      width: 5.6rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto', sans-serif;
      background: ${props => props.theme['base-button']};
      color: ${props => props.theme['base-text']};
      border: 0;
      border-radius: 8px;
      gap: 5px;

      &:hover {
        background: ${props => props.theme['base-hover']};
      } 
    }


`

export const SpanLine = styled.div`
  width: 23rem;
  background: ${props => props.theme['base-button']};
  height: 1px;
  margin-left: 2rem;
  margin-top: 1rem;

`