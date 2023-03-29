import styled from "styled-components";

export const CardContainer = styled.div`
position: relative;
width: 300px;
height: 350px;
border: 1px solid black;
background: #f4f4f4;
padding: 40px;
overflow:hidden;
::before{
 content: "";
 width: 100px;
 height: 100px;
 background: #E7E7E7;
 position: absolute;
 border-radius: 100%;
 top: 0;
 right: 0;
 transform: translate(30px,-40px);
}
`
export const CenterCard = styled.div`

`
export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
`
export const ContainerIcon = styled.div`
font-size: 4rem;
color: red;
`