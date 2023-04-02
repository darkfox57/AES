import styled, { keyframes } from 'styled-components';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    left: -350px;
  }
  to {
    transform: translateX(0%);
    left: 0px;
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0%);
    left: 0px;
  }
  to {
    transform: translateX(-100%);
    left: -350px;
  }
`;

export const HeaderGrid = styled.header`
  display: flex;
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
  @media screen and (max-width: 1316px) {
  flex-direction: column;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(0, 0, 0, 0.25);
  z-index: 40;
  width: 350px;
  justify-content: space-evenly;
  height: 100vh;
  z-index: 200;
  left: ${({ visible }) => (visible ? '0px' : '-350px')};
  animation: ${props => (props.visible ? slideInAnimation : slideOutAnimation)} 0.3s ease-in-out;
}

`
export const Hamburguer = styled.header`
  z-index:40;
  font-size: 1.6rem;
  position: fixed;
  right: 20px;
  top: 20px;
  color: white;
  display: none;
  ${({ scrolled }) =>
    scrolled &&
    `
    top: 0;
    right: 0;
    padding: 10px 20px;;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(0, 0, 0, 0.25);
  z-index: 100;
  svg {
    float: right;
  }
  `}
  @media screen and (max-width: 1316px) {
    display: block;
  }
`
