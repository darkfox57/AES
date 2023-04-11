import styled from 'styled-components'

export const Form_Styled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 55%;
  height: fit-content;

  background-color: white;
  border-radius: 12px;

  padding: 20px 12px;
  margin: 0 auto;
  gap: 20px;

  position: relative;

  h2 {
    font-weight: bolder;
    font-style: oblique;
  }

  .spanError {
    font-size: 0.75rem;
    color: red;
  }
`

export const WorkShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  margin-top: 15px;

  width: 100%;
  height: 100px;
`

export const SocialNetworksContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 15px;

  width: 200px;

  label {
    width: auto;
  }
`

export const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  gap: 20px;

  width: 35%;
  height: 100%;
`

export const SubmitButton = styled.button`
  width: 165px;
  height: 40px;

  border: none;
  border-radius: 20px;

  background-color: #00baa3;

  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: medium;

  transition: all 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    scale: 1.1;
  }
`
