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
  gap: 10px;

  min-width: 350px;
  max-width: 700px;

  border-radius: 12px;

  box-shadow: 0px 0px 50px 10px grey;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 225px;

  background-color: #00baa3;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  img {
    width: 300px;
    height: 300px;
    margin-top: -75px;
  }


  @media (max-width: 900px) {
    height: 175px;

    img {
      width: 200px;
      height: 200px;
      margin-top: -30px;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 15px 30px;

  h3 {
    color: #00baa3;
  }
  
  span,
  h3 {
    text-align: center;
  }
`
