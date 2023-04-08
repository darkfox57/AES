import styled from "styled-components";

export const BtnPaginadoFlex = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0;
gap: 20px;
height: max-content;
`

export const Btnpage = styled.button`
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background: ${({page})=> page?"rgb(19 191 80)": "white" };
    color: ${({page})=> page?"white": "black" };
`