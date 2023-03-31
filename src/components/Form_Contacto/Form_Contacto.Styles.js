import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  /* font-size: 0.8rem; */

  gap: 10px;
  & > input {
    height: 50px;
    padding: 0 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    background-color: rgba(200, 200, 200, 0.5);
  }

  & > textarea {
    padding: 6px 15px;
    font-family: 'Caviar Dreams', sans-serif;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    background-color: rgba(200, 200, 200, 0.5);
  }

  & > span {
    color: red;
    text-align: center;
  }
`
