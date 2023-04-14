import styled from 'styled-components'

const CloseButton = styled.button`
  position: absolute;

  border: none;

  width: 50px;
  height: 50px;

  top: 0;
  right: 0;

  background-color: transparent;

  font-size: xx-large;
  font-weight: bolder;

  :hover {
    color: red;
    cursor: pointer;
  }
`
export default CloseButton
