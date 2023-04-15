import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 20px;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.img}) center center/cover no-repeat;
  width: 400px;
  height: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TopFecha = styled.div`
  span {
    font-size: 0.8rem;
  }
`
export const BottomLugar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  span {
    & > svg {
      width: 20px;
      height: 20px;
      color: rgb(0, 186, 163);
    }
    display: -webkit-box;
    -moz-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    max-width: 300px;
  }
  button {
    max-width: 100px;
  }
`
