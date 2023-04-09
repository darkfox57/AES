import styled from 'styled-components'

export const CardNoticiaFlex = styled.div`
 
  display: flex;
  align-items: center;
  column-gap: 20px;
  border-bottom: 1px solid gray;
  padding: 10px 10px;
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 10px 2px gray;
  }
  span {
    h5 {
      text-transform: capitalize;
      margin-bottom: 5px;
    }
    p {
      color: rgb(0, 186, 163);
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
