import styled from 'styled-components'

export const Patrocinadores_Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 60px;
  padding: var(--section-padding);
  margin-top: -150px;
  min-height: 600px;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: top center;
    opacity: 0.2; /* agregar opacidad */
    filter: brightness(70%); /* aplicar un filtro de brillo */
    z-index: -1;
  }
`

export const Logos_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  z-index: 10;
  img {
    width: auto;
    height: 150px;
  }
`
