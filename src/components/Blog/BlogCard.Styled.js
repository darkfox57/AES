import styled from "styled-components";

export const CardContainer = styled.div`
overflow: hidden;
border-radius: 5px;
border: 1px solid rgb(215, 215, 215);
width: 100%;
height: 320px;
background: white;
z-index: 10;
`
export const ContainerImg = styled.div`
background: black;
position: relative;
height: 60%;
border-bottom: 5px solid rgb(255, 81, 81);
img{
    opacity: 0.8;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.fecha{
    border: 1px solid rgb(215, 215, 215);
    padding: 2px 10px;
    background: #f4f4f4;
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 0.8rem;
    padding: 5px 8px;
}
`
export const ContainerInfo = styled.div`
text-transform: capitalize;
padding: 20px 30px;
display: flex;
flex-direction: column;
justify-content: space-around;
column-gap: 20px;
height: 40%;
p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
}
div{
    display: flex;
   gap: 20px;
}
`