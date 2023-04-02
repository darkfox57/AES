import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 100;
`

export const Form_Styled = styled.form`
  width: 55%;
  height: 75%;

  background-color: white;
  border-radius: 12px;

  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
