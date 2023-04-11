import styled from 'styled-components'

export const PortadaContainer = styled.div`
  color: var(--text-white);
  display: flex;
  padding: var(--section-padding);
  align-items: flex-end;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${({ Portada }) => Portada}) center center/cover no-repeat;
  height: 600px;
  div {
    position: relative;
    span {
        background-image: url('/src/assets/brush.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        overflow: visible;
        padding: 30px;
        margin-left: -30px;
        font-size: 0.8rem;
    }
    @media screen and (max-width: 678px){
      h1{
        font-size: 2.5rem;
      }
    }
  }
`
