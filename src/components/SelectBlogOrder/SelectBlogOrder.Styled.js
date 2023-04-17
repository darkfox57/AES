import styled from 'styled-components'

export const SelectFlex = styled.div`
display: flex;
gap: 15px;
flex-wrap: wrap;
    //**responsive */
@media screen and (max-width: 502px){
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
  option {
   // text-align: center;
    background: gray;
  }
    //**responsive */
@media screen and (max-width: 502px){
 width: 166px;
}
`
