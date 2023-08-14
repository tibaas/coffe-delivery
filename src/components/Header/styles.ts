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

gap: 12px;

    img {
        cursor: pointer;
    }

`