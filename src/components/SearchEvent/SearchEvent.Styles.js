import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    min-width: 325px;
    text-align: center;

    ::placeholder {
      color: black;
    }
  }

  button {
    background-color: #00baa3;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    font-size: 0.9rem;
    border: none;

    padding: 8px;

    color: var(--main-white);

    :hover {
      cursor: pointer;
    }
  }
`
