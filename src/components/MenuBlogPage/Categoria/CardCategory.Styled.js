import styled from "styled-components";

export const CardContainer = styled.div`
height: 50px;
cursor: pointer;

span{
    display: inline-block;
    padding: 15px 20px;
    height: 100%;
}
span:first-child{
    :hover{
    color: blue;
}
background: #ebebeb;
width: calc(100% - 60px);
}
span:nth-child(2){
    background: rgb(181 181 181);
    width: 60px;
}
`