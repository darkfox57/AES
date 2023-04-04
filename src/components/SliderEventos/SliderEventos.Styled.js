import styled from 'styled-components'

export const EventoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--section-padding);
  align-items: center;
  gap: 50px;
  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .swiper-card{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
  }
`
