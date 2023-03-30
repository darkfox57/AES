import styled from 'styled-components'

export const ActionContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -100px;
  @media (max-width: 768px){
    margin-top:0;
    padding: 0;
    width: 100%;
  };
`

export const Donation_Action_Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: var(--text-white);
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvPxRNnLoXNGtv2peztXhAv86vCIK4vqyLg&usqp=CAU');
  background-position: center;
  background-size: cover;
  max-width: 600px;
  min-width: 400px;
  padding: 30px;
  gap: 20px;
  z-index: 10;
  svg {
    align-self: center;
    width: 150px;
    z-index: 30;
  }

  div {
    display: flex;
    flex-wrap: wrap;
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

export const Involve_Action_Content = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding: 30px;
  gap:20px;
  color: var(--text-white);
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE89HzoUhwxpCcX_V8ibS9wgoyVHWnI1g0Jw&usqp=CAU');
  background-position: center;
  background-size: cover;
  max-width: 600px;
  min-width: 400px;
  z-index: 20;

  svg {
    align-self: center;
    width: 150px;
    z-index: 30;
  }

  div {
    display: flex;
    flex-wrap: wrap;
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
