import styled from 'styled-components'

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
`
export const DetailModal = styled.div`
overflow-y: auto;
  height: 550px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  background: white;
  width: 400px;
  & > span {
    display: block;
    width: 100%;
    padding: 8px 10px;
    color: white;
    background: #fb6373;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
 & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    a {
      text-decoration: none;
      color: var(--dash-color);
      font-size: 2rem;
      span {
        font-size: 1.5rem;
      }
    }
  }
`
