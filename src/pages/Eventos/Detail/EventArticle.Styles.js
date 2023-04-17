import styled from 'styled-components'

export const EventoArticleForm = styled.div``

export const SectionEvent = styled.section`
  padding: var(--section-padding);
  margin: auto;

  figure {
    height: 700px;
    margin-bottom: 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FlexInfo = styled.section`
  display: flex;

  gap: 30px;
  min-width: fit-content;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    align-items: center;

    p {
      margin-top: -50px;
    }
  }
`
export const TextEvent = styled.section`
  p::first-letter {
    font-size: 4rem;
    text-transform: uppercase;
    float: left;

    padding: 10px;
    margin: 8px 5px 12px 0px;
  }

  @media screen and (max-width: 768px) {
    p {
      margin-top: 25px;
    }
  }
`

export const BlockDetail = styled.section`
  border-top: 4px solid rgb(0, 186, 163);
  background: white;

  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);

  height: max-content;

  margin: 0;
  padding: 13px 17px;

  h4 {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    transform: translateY(-100px);
    padding: 20px 40px;
    margin-left: 25px;
  }
`
export const ListBlock = styled.div`
  margin-bottom: 20px;
  
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
   span{
    font-size: 1.4rem;
    color:  rgb(0, 186, 163);
   }
    li {
      display: flex;
      column-gap: 10px;
      list-style: none;
    }
  }
`
export const ButonBlockContainer = styled.div`
  display: grid;
  place-items: center;
`
