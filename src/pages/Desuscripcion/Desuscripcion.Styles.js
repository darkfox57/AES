import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
  }
  gap: 25px;

  min-width: 350px;
  max-width: 700px;
`
