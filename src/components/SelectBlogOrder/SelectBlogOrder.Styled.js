import styled from 'styled-components'

export const SelectFlex = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  //**responsive */
  @media screen and (max-width: 502px) {
    justify-content: center;
  }
`
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
  //**responsive */
  @media screen and (max-width: 502px) {
    width: 166px;
  }
`
export const ResetBtn = styled.button`
  width: max-content;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  outline: none;
  padding: 8px 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border: none;
  background-color: rgba(223, 223, 223, 0.5);
  font-family: var(--body-font);
  font-size: 0.9rem;
  :hover {
    cursor: pointer;
    scale: 1.01;
  }
`
