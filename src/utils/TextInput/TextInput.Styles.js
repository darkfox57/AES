import styled from 'styled-components'

export const TextInputStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;

  font-size: 0.8rem;

  input[type='text'] {
    min-width: 280px;
    font-size: 0.7rem;
  }

  span {
    color: #d55342;
  }
`
