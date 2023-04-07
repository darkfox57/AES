import styled from "styled-components";

export const EtiquetaContainer = styled.div`
padding: 30px 23px;
border: 2px solid gray;
h4{
    margin-bottom: 15px;
}
`
export const GridEtiquetaBtn = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
button{
    background: rgb(235, 235, 235);
    border: none;
    height: 30px;
    text-transform: capitalize;
    :hover{
       background: rgb(255, 81, 81)
    }
}
`