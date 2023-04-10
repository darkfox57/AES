import styled from 'styled-components'

export const BtnPaginadoFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  gap: 20px;
  height: max-content;
`

export const Btnpage = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background: ${({ page }) => (page ? 'rgb(0, 186, 163)' : 'white')};
  color: ${({ page }) => (page ? 'white' : 'black')};
`

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: white;

  :not(:disabled):hover {
    cursor: pointer;
  }
`
