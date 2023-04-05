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
  width: 100%;
`
export const BlockDetail = styled.section`
  height: max-content; 
  transform: translateY(-100px);
  padding: 30px 40px;
  border-top: 4px solid rgb(0, 186, 163);
  background: white;
  h4{
    margin-bottom: 20px;
  }
`
export const ListBlock = styled.div`
margin-bottom: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      display: flex;
      column-gap:10px;
      list-style: none;
    }
  }
`
export const ButonBlockContainer = styled.div`
display: grid;
place-items: center;
`