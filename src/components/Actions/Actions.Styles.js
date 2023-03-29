import styled from 'styled-components'

export const ActionContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  gap: 0;
  padding: 0 300px;
  margin-top: -100px;
`

export const Donation_Action_Stylizied = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  color: var(--text-white);
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvPxRNnLoXNGtv2peztXhAv86vCIK4vqyLg&usqp=CAU');
  background-position: center;
  background-size: cover;

  width: 50%;
  z-index: 10;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 30%;
    z-index: 30;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    z-index: 30;
  }

  &::before {
    content: '';
    position: absolute;

    background-color: #00baa3;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 0.8;
    z-index: 15;
  }
`

export const Involve_Action_Stylizied = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  color: var(--text-white);
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE89HzoUhwxpCcX_V8ibS9wgoyVHWnI1g0Jw&usqp=CAU');
  background-position: center;
  background-size: cover;

  width: 50%;
  z-index: 20;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 30%;
    z-index: 30;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    z-index: 30;
  }

  &::before {
    content: '';
    position: absolute;

    background-color: #d55342;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 0.8;
    z-index: 10;
  }
`
