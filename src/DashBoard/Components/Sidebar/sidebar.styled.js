import styled from "styled-components";

export const SideBarContent = styled.div`
display: flex;
flex-direction: column;
padding: 50px 0;
gap: 30px;
align-items: center;
img {
 width: 150px;
 height: auto;
}
nav {
 display: flex;
 flex-direction: column;
 width: 100%;
 list-style: none;
 li .current {
  background-color: var(--dash-color);
   color: var(--text-white);
 }
 li a {
  text-decoration: none;
  color: var(--text-dark);
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px 50px;
  cursor: pointer;
  i {
   font-size: 1.3rem;
  }
  &:hover {
   background-color: var(--dash-color);
   color: var(--text-white);
  }
 }
}
`

export const ProfileMiniature = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 30px;
  img {
   border-radius: 13px;
   width: 80px;
  }
  div {
   display: flex;
   flex-direction: column;
   gap: 10px;
  }
`