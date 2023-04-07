import styled from "styled-components";

export const SearchContainer = styled.div`
border: 2px solid gray;
display: flex;
flex-direction: column;
padding: 30px 23px;
gap: 20px;
//align-items: center;
div{
    height: 50px;
    input{
        height: 100%;
        width: calc(100% - 80px);
        background: white;
        outline: none;
        padding: 20px;
        font-size: 0.8rem;
        border: none;
        ::placeholder{
            color:black;
            padding: 0 5px;
            font-size: 0.8rem;
        }
    }
    button{
        background: rgb(255, 81, 81);
        width: 80px;
        height:100%;
        border: none;
        color: white;
    }
}
`