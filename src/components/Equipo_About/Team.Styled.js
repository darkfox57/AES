import styled from 'styled-components'

export const TeamFlex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--text-white);
  background: var(--primary-blue);
  padding: var(--section-padding);
  gap: 32px;
.teamflex {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  background: var(--primary-blue);
  height: max-content;
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
  }
  }
`
