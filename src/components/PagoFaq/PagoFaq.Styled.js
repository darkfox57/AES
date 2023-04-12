import styled from 'styled-components'

export const PagoFaqContainer = styled.section`
  padding: 70px 0;
  & > h3 {
    text-align: center;
    margin-bottom: 50px;
  }
`
export const ContainerImg = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 100px;
  margin-bottom: 50px;
 
  .card {
    text-align: center;
    max-width: 400px;
    p {
      margin-bottom: 20px;
    }
    img {
      object-fit: contain;
      width: 150px;
      height: 150px;
    }
  }
`
export const ComoPagarQr = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 50px;
img {
      justify-self: center;
      align-self: center;
      object-fit: contain;
      width: 200px;
      height: 200px;
    }
`