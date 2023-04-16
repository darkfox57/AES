import styled from 'styled-components'

export const QuieneSomosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 935px) {
    flex-direction: column;
  }
`
export const GridQuienes = styled.div`
  padding: var(--section-padding);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  place-items: center;
  div:first-child {
    max-width: 500px;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: auto;
    }

    @media (max-width: 1300px) {
      max-width: 370px;
    }

    @media (max-width: 1050px) {
      max-width: 330px;
    }

    @media (max-width: 935px) {
      max-width: 100%;
    }
  }
`
export const QuienesInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 10px 40px;
  max-width: 500px;
  span {
    color: rgb(0, 186, 163);
  }
  p:first-child {
    color: red;
  }

  @media (max-width: 1300px) {
    max-width: 450px;
    padding: 10px 20px;
  }

  @media (max-width: 1050px) {
    max-width: 400px;
    padding: 10px 20px;
  }

  @media (max-width: 935px) {
    max-width: 100%;
  }
`
