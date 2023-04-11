import styled from "styled-components";

export const CardContainer = styled.div`
height: 50px;
width: 100%;
cursor: pointer;
border: 1px solid #d5d5d5;
display: flex;
transform: all 0.2s ease-in-out;
:hover{
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: rgb(227, 227, 227) 0px 0px 10px 2px;

}
.text,.cant{
    height: 100%;
    display: flex;
    align-items: center;
}

.text{
padding: 0 10px;
background: white;
width: calc(100% - 60px);
:hover{
    color: rgb(255, 81, 81);
}
}

.cant{
    color: white;
    background: rgb(255, 81, 81);
    justify-content: center;
    width: 60px;
}
`