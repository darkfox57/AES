import styled from 'styled-components'

export const ComponentContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: var(--section-padding);
  padding: 50px;
  .center{
  column-gap: 20px;
  max-width:1200px;
  display: flex;
  justify-content: center;
  align-items: center;
   //**media query resonsive */
  @media screen and (max-width: 1218px) {
    flex-wrap: wrap;
    .flexInfoContent{
    width:80%;
    text-align:center;
  }
  }
  }
  @media screen and (max-width: 727px){
    padding: 0;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding: 30px;
  //min-width: 400px;
  //max-width: 500px;
  &>:first-child {
    height: 430px;
    width: 270px;
  }
  &>:nth-child(2) {
    height: 500px;
    width: 350px;
  }
  figure img {
    object-fit: cover;
    height: 100%;
    object-position: center;
  }
  //**responsive */
  @media screen and (max-width: 727px){
    &>:first-child {
    width: 100%;
  }
  &>:nth-child(2) {
    width: 100%;
  }
}
`

export const InfoContainer = styled.div`
  grid-area: quienes-somos;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--main-dark);
  span {
    color: #00baa3;
  }
  //**media query resonsive */
  @media screen and (max-width: 776px){
    h2{
      font-size: 2.4rem;
    }
  }
`
