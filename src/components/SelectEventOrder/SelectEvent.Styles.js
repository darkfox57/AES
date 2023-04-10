import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;

  select {
    width: 15%;
    height: 25px;
    border-radius: 10px;
    text-align: center;
    border: none;
    transition: all 1s ease-in-out;

    :hover {
      cursor: pointer;
      scale: 1.1;
    }
  }
`
