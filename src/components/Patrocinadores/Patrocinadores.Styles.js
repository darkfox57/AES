import styled from 'styled-components'

export const Patrocinadores_Styled = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  display: flex;
  justify-content: center;

  position: relative;

  gap: 60px;
  padding: 150px 0;

  min-height: 500px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 35px;

    z-index: 10;
  }

  &::before {
    content: '';
    position: absolute;

    background-color: white;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: 0.8;
  }
`

export const Logos_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 50px;

  img {
    width: auto;
    height: 150px;
  }
`
