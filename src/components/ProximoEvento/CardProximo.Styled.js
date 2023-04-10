import styled from 'styled-components'

export const CardContainer = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: 1fr 500px max-content;
  place-items: center;
  gap: 50px;
`
export const CardImg = styled.div`
  width: 400px;
  height: 250px;
  background: #fff url(${(props) => props.img}) center center/cover no-repeat;
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 10px;

  span:nth-child(2) {
    background: green;
  }
  .dateContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    span {
      background: #b51717;
    }
  }

  span {
    text-align: center;
    width: max-content;
    height: max-content;
    border-radius: 50px;
    padding: 5px 20px;
    font-size: 0.85rem;
  }
`
export const CardInfo = styled.div`
  display: grid;
  gap: 8px;

  h3 {
    text-transform: capitalize;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    span {
      display: flex;
      gap: 10px;
      align-items: center;
      .check {
        color: green;
      }
    }
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    color: gray;
    text-align: justify;
  }
`
