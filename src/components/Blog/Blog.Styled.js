import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--section-padding);
  align-items: center;
  gap: 50px;
  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    //gap: 50px;
  }
  .swiper-card{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
  }
`

