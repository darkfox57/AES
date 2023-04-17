import styled from 'styled-components'

export const Containermovil = styled.div`
  display: flex;
  gap: 50px;
  padding: 70px 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`

export const PlinContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BancosContainer = styled.div`
  background:  rgb(0, 186, 163);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`
export const BancosLogo = styled.img`
  width: 13%;
  min-width: 110px;
  object-fit: contain;
  cursor: pointer;
  aspect-ratio: 3/2;
  margin: 10px;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
    hue-rotate(0deg) brightness(100%) contrast(100%);

  :hover {
    filter: saturate(1);
  }
`

export const AppVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ banco }) => (banco === 'bcp' ? '400px' : '400px')};
  & > div:first-child {
    width: 100%;
  }
  .swiper-card {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain;
      height: ${({ banco }) => (banco === 'bcp' ? '400px' : '530px')};
      width: ${({ banco }) => (banco === 'bcp' ? '400px' : '530px')};
    }
  }
`
export const AppVisualInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    text-transform: capitalize;
  }
  p {
    max-width: 500px;
  }
`
