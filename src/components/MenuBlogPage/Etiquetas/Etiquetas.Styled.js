import styled from "styled-components";

export const EtiquetaContainer = styled.div`
padding: 30px 23px;
border: 2px solid #d7d7d7;
h4 {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 20px;
    .icon-label {
      color: rgb(255, 81, 81);
    }
  }
`
export const GridEtiquetaBtn = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
button{
    border: 1px solid rgb(213, 213, 213);
    background: white;
    height: 30px;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;
    :hover{
      border: 1px solid gray;
      cursor: pointer;
       color: white;
       background: rgb(255, 81, 81);
       transform: scale(1.02);
       box-shadow: rgb(227, 227, 227) 0px 0px 10px 2px;
    }
}
`