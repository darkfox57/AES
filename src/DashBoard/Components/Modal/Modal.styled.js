import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateX(0) translateY(0);
}
`

export const ModalContainer = styled.div`
  //padding-left: 250px;
  position: fixed;
  top: 0;
  left: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(245, 245, 250, 0.03);
  backdrop-filter: blur(1.8px);
  width: calc(100% - 250px);
  height: 100%;
  z-index: 40;
  animation: ${slideIn} 1.5s ease-in-out;
`
export const DetailModal = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  background: white;
  width: ${({ size }) => size === 'gallery' ? '40%' : '400px'};
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  .close {
    border: none;
    background-color: transparent;
    padding: 0;
    align-self: flex-end;
    cursor: pointer;
  }
  span {
    display: block;
    width: 100%;
    padding: 8px 10px;
    color: white;
    background: #fb6373;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    a {
      text-decoration: none;
      color: var(--dash-color);
      display: flex;
      gap: 20px;
      font-size: 2rem;
      span {
        font-size: 1.1rem;
      }
    }
  }
`
