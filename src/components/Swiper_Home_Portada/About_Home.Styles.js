import styled from 'styled-components'

export const ComponentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: var(--section-padding);
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding: 30px;
  min-width: 400px;
  max-width: 500px;
  &>:first-child {
    height: 375px;
    width: 270px;
  }
  &>:nth-child(2) {
    height: 500px;
    width: 310px;
  }
  figure img {
    object-fit: cover;
    height: 100%;
    object-position: 50% 50%;
  }
  @media screen and (max-width: 768px) {
    figure {
      display: none;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  min-width: 400px;
  max-width: 500px;
  color: var(--main-dark);
  span {
    color: #00baa3;
  }
  p {
    max-width: ${({ size }) => size ? size : '400px'};
  }
`
