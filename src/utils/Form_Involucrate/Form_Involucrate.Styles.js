import styled from 'styled-components'

export const Form_Styled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;

  max-height: 90%;

  background-color: white;

  padding: 20px 12px;
  margin: 0 auto;
  gap: 20px;

  position: relative;
  overflow-y: auto;

  h2 {
    text-align: center;
    padding: 10px 30px;
    font-weight: bolder;
    font-size: 1.5rem;

    @media screen and (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  .subtitle {
    padding: 0 10px;
    text-align: center;
    max-width: 400px;
  }

  .spanError {
    padding-top: 5px;
    font-size: 0.8rem;
    color: #d55342;
  }
`

export const WorkShopContainer = styled.div`
  width: 75%;
  text-align: center;
`

export const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`

export const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  flex-wrap: wrap;

  padding-top: 15px;

  input {
    box-shadow: none;
  }
`

export const SubmitButton = styled.button`
  padding: 12px 24px;

  border: none;
  border-radius: 20px;

  background-color: var(--primary-blue);

  font-family: var(--body-font);
  color: var(--text-white);

  transition: transform 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`
