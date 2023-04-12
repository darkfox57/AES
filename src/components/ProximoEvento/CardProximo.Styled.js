import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
`
export const CardImg = styled.div`
  padding: 30px;
  position: relative;

  background: #fff url(${(props) => props.img}) center center/cover no-repeat;

  height: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    opacity: 0.8;
  }

  span {
    position: absolute;

    color: var(--main-white);
    bottom: 10px;
    right: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    padding: 0;
  }
`
export const CardInfo = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .infoContainer {
    display: flex;
    gap: 15px;

    max-width: fit-content;
  }

  span {
    font-size: 0.95rem;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;

    color: gray;

    font-family: var(--body-font);
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
