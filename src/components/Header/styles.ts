import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    max-height: 6.5rem;

    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme['white']};

`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

        img {
            cursor: pointer;
        }
     

`

export const CartNumber = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin-right: 90px;
        margin-top: 30px;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        font-family: 'Baloo 2', sans-serif;
        font-size: 1rem;
        color: ${props => props.theme['yellow-light']};
        background: ${props => props.theme['purple']};


`
