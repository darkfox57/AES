import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  width: 100%;

  select {
    min-width: 150px;

    border: none;
    border-radius: 10px;

    text-align: center;

    transition: all 0.3s ease-in-out;

    :hover {
      cursor: pointer;
      scale: 1.05;
    }
  }
`
