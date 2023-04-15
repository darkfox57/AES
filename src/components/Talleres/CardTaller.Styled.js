import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  width: 310px;
  height: 350px;
  background: white;
  padding: 40px;
  overflow: hidden;
  ::before {
    content: '';
    width: 100px;
    height: 100px;
    background: rgb(255, 81, 81);
    position: absolute;
    border-radius: 100%;
    top: 0;
    right: 0;
    transform: translate(30px, -40px);
  }
`
export const CenterCard = styled.div``
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  h5 {
    font-size: 1.5rem;
    line-height: 1.6rem;
  }
  p {
    color: gray;
  }
`
export const ContainerIcon = styled.div`
  font-size: 5rem;
  color: rgb(255, 81, 81);
`
