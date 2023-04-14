import styled from 'styled-components'

export const SelectOrderContainer = styled.select`
  width: max-content;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  outline: none;
  :hover {
    cursor: pointer;
    scale: 1.01;
  }
  option {
   // text-align: center;
    background: gray;
  }

`
