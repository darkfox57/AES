import styled, { keyframes } from 'styled-components'

const SlideIn = keyframes`
from {
  transform: translateX(-300px);
}
to {
  transform: translateX(0);
}
`

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
`

export const FooterContent = styled.div`
  display: grid; 
  gap: 50px;
  grid-template-areas: 'quienes-somos PeruSano UltimNoticia ';
  grid-template-columns: 500px max-content 1fr;
  //place-items: center;

  //**responsive query */
  @media screen and (max-width: 1223px) {
    padding: 0px 180px;
    place-items: start;
    grid-template-areas:
      'quienes-somos quienes-somos '
      'UltimNoticia PeruSano ';
    grid-template-columns: 1fr 1fr;
    row-gap: 50px;
  }
  @media screen and (max-width: 1032px){
    padding: 0px 80px;
  }
  @media screen and (max-width: 720px) {
    padding: 0px 80px;
    grid-template-areas:
      'UltimNoticia '
      'PeruSano '
      'quienes-somos';
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 570px){
    place-items: center;
    padding: 0 30px;
  }
`

export const FooterMenu = styled.div`
  align-self: start;
  grid-area: PeruSano;
  h4{
    margin-bottom: 20px;
  }
ul{
   display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}
  li {
    list-style: none;
    text-decoration: none;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    &::after{
      content: '';
      width: 0;
      height: 1px;
      background-color: var(--main-color);
  }
  }
  .navItem:hover::after{
      content: '';
      width: 70%;
      height: 1px;
      background-color: var(--main-color);
      animation: ${SlideIn} 0.4s ease-in-out;
  }
  .current {
    list-style: none;
    text-decoration: none;
    color: var(--main-color);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 8px;
    &::after{
      content: '';
      width: 70%;
      height: 1px;
      background-color: var(--main-color);
      animation: ${SlideIn} 0.4s ease-in-out;
    }
  }
  //**responsive query */
  @media screen and (max-width: 1223px){
    justify-self: center;
  }
  @media screen and (max-width: 720px){
    justify-self: start;
    ul{
        column-gap: 30px;
        grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 570px){
    justify-self: center;
  }

`

export const LastBlogs = styled.div`
  grid-area: UltimNoticia;
`

