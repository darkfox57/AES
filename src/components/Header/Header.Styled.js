import styled,{keyframes} from 'styled-components'

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
   //display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  text-align: center;
  //border:1px solid red;
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(0, 0, 0, 0.25);
  z-index: 40;
  width: 350px;
  //padding: 50px 0;
  justify-content: space-evenly;
  height: 100vh;
  left: ${({ visible }) => (visible ? '0px' : '-350px')};
  animation: ${props => (props.visible ? slideInAnimation : slideOutAnimation)} 0.3s ease-in-out;
}

`
export const Hamburguer = styled.header`
  font-size: 1.6rem;
  position: fixed;
  right: 40px;
  top: 40px;
  color: white;
  display: none;
  @media screen and (max-width: 1316px) {
    display: block;
  }
`
