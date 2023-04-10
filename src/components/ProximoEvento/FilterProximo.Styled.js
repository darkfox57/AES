import styled from 'styled-components'

export const FilterProximosEvento = styled.div`
  display: flex;
  gap: 20px;
  button {
    cursor: pointer;
    background: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    transition: transform 0.3s ease-out;
    :hover {
      background: #00baa3;
      transform: translateY(-10px);
    }
  }
`
