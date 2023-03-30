import styled from 'styled-components'

export const HeaderGrid = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 4;
  color: white;
  padding: 10px 0;
  ${({ scrolled }) => scrolled && `
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`
