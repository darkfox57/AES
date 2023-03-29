import styled from 'styled-components'

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 75px 0;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 30px;
  padding: 30px;

  width: 50%;

  & > :first-child {
    height: 375px;
    width: 270px;
  }

  & > :nth-child(2) {
    height: 500px;
    width: 310px;
  }

  figure img {
    object-fit: cover;
    height: 100%;
    object-position: 50% 50%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
  gap: 20px;

  width: 50%;
  height: 100%;

  color: var(--main-dark);

  span {
    color: #00baa3;
  }

  p {
    max-width: 500px;
  }
`
