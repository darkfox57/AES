import styled from "styled-components";

export const TeamCard = styled.div`
  width: 310px;
  height: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  div:first-child{
    overflow: hidden;
    border-radius: 80%;
    width: 200px;
    height: 200px;
    img{
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
  }
  div:nth-child(2){
    p{
        text-align: center;
        color: red;
    }
  }
`