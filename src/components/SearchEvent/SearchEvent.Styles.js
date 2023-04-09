import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 30%;
  padding-bottom: 20px;
  input {
    width: 90%;
    height: 35px;
    text-align: center;
    border: 1px solid gray;
    ::placeholder {
      color: black;
    }
  }

  button {
    border: none;
    background-color: #00baa3;
    width: 10%;
    height: 35px;
    :hover {
      cursor: pointer;
    }
  }
`
