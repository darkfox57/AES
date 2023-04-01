import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const FormContainer = styled.form`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: var(--section-padding);
  & > :nth-child(5) {
    flex-basis: 100%;
  }
  button {
    align-self: center;
  }
`

export const Requirement = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  .contact-text-area {
    width: 100%;
  }
  div {  
    flex: 1 0 calc(50% - 10px);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    padding: 12px 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    background-color: rgba(200, 200, 200, 0.5);
    font-family: var(--body-font);
    min-width: 300px;
  }
  textarea {
    padding: 12px 15px;
    font-family: var(--body-font);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    background-color: rgba(200, 200, 200, 0.5);
  }
  span {
    color: red;
    text-align: center;
  }
`
