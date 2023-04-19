import styled from 'styled-components'



export const NavContainer = styled.nav`
  width: max-content;
`
export const ListNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 70px;
  li {
    list-style: none;
    cursor: pointer;
    
    a {
      text-decoration: none;
      color: var(--text-white);
      padding: 5px 12px;
      position: relative;
      &::before {
        content: '';
        width: 0;
        background-color: var(--primary-blue);
        opacity: 0.8;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 50%;
        z-index: -1;
        transition: width 0.5s ease-in-out;
      }
      &:hover::before{
        width: 100%;
      }
    }
    .current {
      position: relative;
      z-index: 10;
      &::before {
        width: 100%;
      }
    }
  }
  .buttonsNav {
      display: flex;
      gap: 15px;
    }
  //**Responsive media */
  @media screen and (max-width: 1609px){
    column-gap: 50px;
  }
  @media screen and (max-width: 1551px){
    column-gap: 35px;
  }
  @media screen and (max-width: 1378px) {
    flex-direction: column;
    row-gap: 50px;
  }
`
