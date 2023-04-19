import styled from 'styled-components'

export const CardNoticiaFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  border-bottom: 1px solid gray;
  padding: 10px 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: rgb(227, 227, 227) 0px 0px 10px 2px;
  }
  span {
    width: calc(100% - 60px);
    h5 {
      font-size: 0.9rem;
      text-transform: capitalize;
      margin-bottom: 5px;
    }
   .flex{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   }
    p {
      color: rgb(255, 81, 81);
    }
  }
  img {
    object-fit: cover;
    object-position: center;
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }
`
