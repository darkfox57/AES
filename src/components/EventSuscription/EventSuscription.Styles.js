import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
  margin-top: 50px;
`

export const FormSuscription = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 25px;

  padding-bottom: 25px;
  h3 {
    display: block;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
