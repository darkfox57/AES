import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: max-content;
  //border: 1px solid green;
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
    }
  }
  @media screen and (max-width: 1316px) {
    flex-direction: column;
    row-gap: 50px;
  }
`
