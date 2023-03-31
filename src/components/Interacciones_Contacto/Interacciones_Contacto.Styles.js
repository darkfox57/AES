import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Interaction_Styled = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 185px;

  color: var(--text-white);
  background-color: var(--main-dark);
`

export const TopContainer = styled.div`
  display: flex;

  gap: 20px;
  padding-top: 20px;

  & > :first-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: #00baa3;

    width: 90px;
    height: 50px;
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    h4 {
      font-size: 1rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`

export const BottomContainer = styled.div`
  display: flex;
  height: 100%;

  & > :first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 70%;

    padding-left: 35px;
    gap: 5px;

    label {
      font-size: 0.7rem;
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
  }
`

export const Button_Styled = styled.div`
  background-color: #00baa3;

  text-align: center;
  line-height: 2.55rem;

  width: 45px;
  height: 45px;

  z-index: 10;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`

export const ArrowIcon = styled(FaArrowRight)`
  color: var(--text-white);
  vertical-align: middle;
  font-size: 20px;
`
