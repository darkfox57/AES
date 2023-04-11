import styled, { css } from 'styled-components'

export const TextInputStyled = styled.div`
  ${({ type }) =>
    type === 'text' &&
    css`
      display: grid;
      grid-template-columns: auto 200px auto;
      align-items: center;
      gap: 10px;

      max-width: fit-content;

      label {
        font-size: 0.8rem;
        text-align: center;

        ${({ subname }) =>
          !subname &&
          css`
            width: 175px;
          `}
      }
      input {
        text-align: center;
      }

      span {
        text-align: left;
        font-size: 0.75rem;
        color: red;
        grid-column: 3;
        width: 200px;
      }
    `}

  ${({ type }) =>
    type === 'radio' &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;

      label {
        font-size: 0.85rem;
      }
      input {
        height: fit-content;
      }
    `}
`
