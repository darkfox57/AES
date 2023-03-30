import styled from "styled-components";

export const CardContainer = styled.div`
width: 340px;
height: 350px;
border: 1px solid black;
`
export const ContainerImg = styled.div`
background: black;
position: relative;
height: 50%;
border-bottom: 5px solid greenyellow;
img{
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.fecha{
    border: 1px solid black;
    padding: 2px 10px;
    background: #f4f4f4;
    position: absolute;
    bottom: 5px;
    right: 5px;
}
`
export const ContainerInfo = styled.div`
padding: 25px 30px;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 50%;
`