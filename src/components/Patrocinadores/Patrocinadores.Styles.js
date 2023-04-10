import styled from 'styled-components'

export const Patrocinadores_Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 60px;
  padding: var(--section-padding);
  min-height: 600px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ image }) => image}) center center/cover no-repeat fixed;
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
   img {

    filter: saturate(1.5);
    border-radius: 100%;
    overflow:hidden;
    object-fit: cover;
    width: 150px;
    height: 150px;
  }
`
