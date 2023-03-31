import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Interaction_Styled = styled.div`
  display: flex;
  flex-direction: column;

  border: 5px solid orange;

  width: 265px;
  height: 145px;
`

export const TopContainer = styled.div`
  display: flex;

  gap: 20px;
  padding-top: 20px;

  & > :first-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;

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

    padding-left: 10px;
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
  text-align: center;
  line-height: 2.2rem;
  width: 40px;
  height: 40px;
  background-color: green;
  z-index: 10;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`

export const ArrowIcon = styled(FaArrowRight)`
  vertical-align: middle;
  font-size: 20px;
`
