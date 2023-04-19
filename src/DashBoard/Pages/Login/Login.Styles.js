import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .formLogin {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0 0 5px 1px #dddddd;
  -moz-box-shadow: 0 0 5px 1px #dddddd;
  box-shadow: 0 0 5px 1px #dddddd;
  gap: 15px;
  padding: 50px;
  border-radius: 13px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
  }
  img {
    width: 175px;
    height: auto;
  }
  input {
    padding: 8px 20px;
    text-align: center;
    border: none;
    -webkit-box-shadow: inset 1px 1px 10px 1.5px #dddddd;
    -moz-box-shadow: inset 1px 1px 10px 1.5px #dddddd;
    box-shadow: inset 1px 1px 10px 1.5px #dddddd;
    border-radius: 8px;
    &::placeholder {
      color: #ccc;
    }
  }
  label {
      font-size: 1rem;
    }
  span {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  }
`

