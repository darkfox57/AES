import styled from "styled-components";

export const TCWrapper = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
.creation {
display: flex;
flex-direction: column;
max-width: 500px;
gap: 32px;
form {
 display: flex;
 flex-direction: column;
 gap: 32px;
 label {
 display: flex;
 flex-direction: column;
 gap: 15px;
 input {
  max-width: 300px;
  &::placeholder {
   color: #c0c0c0;
  }
 }
}
.selectBlock {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 15px;
 }
}
}
.list {
 display: flex;
 flex-direction: column;
 max-width: 500px;
 gap: 12px;
 justify-content: center;
 div {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  p {
   width: 300px;
  }
 }
}
`