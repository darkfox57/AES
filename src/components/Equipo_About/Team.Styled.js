import styled from 'styled-components'

export const TeamFlex = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  background: rgb(0, 186, 163);
  height: max-content;
  padding: var(--section-padding);
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
`
