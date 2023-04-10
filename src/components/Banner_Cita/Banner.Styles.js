import styled from 'styled-components'

export const Banner_Stylizied = styled.div`
  background-image: url('https://coachendo.com/wp-content/uploads/2022/07/shutterstock_2069741426-1200x800.jpg');
  min-height: 400px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`

export const PharaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 10;
  color: var(--text-white);
  span {
    font-size: 1.2rem;
  }
  p {
    line-height: 2.2rem;
    width: 80%;
    text-align: center;
    font-size: 2rem;
  }
`
