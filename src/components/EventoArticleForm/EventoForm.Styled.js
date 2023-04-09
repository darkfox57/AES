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
`
export const FlexInfo = styled.section`
  display: flex;
  gap: 50px;
  margin-right: 30px;
`
export const TextEvent = styled.section`
  display: flex;
  width: 100%;
  text-align: justify;
`

export const FirstLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 30%;
  p::first-letter {
    font-size: 4rem;
    text-transform: uppercase;
    float: left;
    margin: 8px 5px 12px 0px;
  }
`

export const Text = styled.div`
  width: 70%;
  height: 30%;
  text-align: justify;
`

export const BlockDetail = styled.section`
  height: max-content;
  transform: translateY(-100px);
  padding: 30px 40px;
  border-top: 4px solid rgb(0, 186, 163);
  background: white;
  h4 {
    margin-bottom: 20px;
  }
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
`
export const ListBlock = styled.div`
  margin-bottom: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
