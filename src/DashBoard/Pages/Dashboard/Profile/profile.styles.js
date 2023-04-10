import styled from "styled-components";

export const ProfileBody = styled.section`
display: flex;
flex-direction: column;
gap: 30px;
form {
 display: flex;
 flex-direction: column;
 gap: 32px;
 label {
  display: flex;
  gap: 15px;
  flex-direction: column;
  select {
   padding: 10px;
  }
 }
 img {
  max-width: 200px;
  border-radius: 30px;
 }
}
`