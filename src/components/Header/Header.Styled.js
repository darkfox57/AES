import styled from 'styled-components'

export const HeaderGrid = styled.header`
  display: ${({isOpen})=> isOpen ? "none" : "flex"};
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 4;
  color: white;
  padding: 10px 0;
  ${({ scrolled }) =>
    scrolled &&
    `
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(0, 0, 0, 0.25);
  z-index: 100;
  `}
  img {
    height: 50px;
    width: auto;
  }
  @media screen and (max-width: 1378px) {
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: -330px;
  width: 330px;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-out;
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(0, 0, 0, 0.25);
  z-index: 100;
  &.open {
    transform: translateX(330px);
  }
  }
`
export const Hamburguer = styled.header`
  cursor: pointer;
  z-index: 40;
  font-size: 1.6rem;
  position: fixed;
  right: 20px;
  top: 20px;
  color: var(--primary-blue);
  display: none;
  @media screen and (max-width: 1378px) {
    display: block;
  }
`
