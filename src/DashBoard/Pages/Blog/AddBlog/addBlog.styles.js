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
 .editor {
  width: 100%;
  min-height: 400px;
  padding: 0;
   background-color: #fff;
  .editor-input {
   width: 100%;
   height: 360px;
   background-color: #fff;
  }
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