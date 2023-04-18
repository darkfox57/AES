import styled from 'styled-components'

export const PaginadoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  .disabled {
   filter: grayscale();
   cursor: auto;
  }
`
