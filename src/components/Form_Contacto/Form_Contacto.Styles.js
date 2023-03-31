import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  padding: 25px 200px;

  & > :nth-child(5) {
    flex-basis: 100%;
  }
`

export const Requirement = styled.div`
  flex-basis: calc(50% - 1.5em);
  display: flex;
  flex-direction: column;

  gap: 10px;
  & > input {
    height: 35px;
    padding: 0 15px;
  }

  & > textarea {
    padding: 6px 15px;
    font-family: 'Caviar Dreams', sans-serif;
  }

  & > span {
    color: red;
    text-align: center;
  }
`
