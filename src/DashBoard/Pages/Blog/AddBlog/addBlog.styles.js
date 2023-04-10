import styled from "styled-components";

export const FormBody = styled.section`
display: flex;
flex-direction: column;
gap: 32px;
form {
 display: flex;
 flex-direction: column;
 gap: 32px;
 label {
  display: flex;
  gap: 15px;
  flex-direction: column;
 }
 img {
  max-width: 500px;
 }
 .checkboxBlock{
  display: flex;
  width: 100%;
  gap: 30px;
  label{
   flex-direction: row;
   input {
    width: auto;
    box-shadow: none;
   }
  }
 }
}
`