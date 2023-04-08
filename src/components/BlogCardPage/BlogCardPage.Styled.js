import styled from 'styled-components'

export const BlogPageCardContainer = styled.div`
  border: 1px solid black;
  height: max-content;
  .portada {
    width: 700px;
    height: 400px;
    background: #fff url(${(props) => props.img}) center center/cover no-repeat;
  }
`
export const ContainerInfo = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > span:first-child {
    color: white;
    background: #ff5151;
    width: max-content;
    padding: 5px 10px;
  }
  p {
    color: #838383;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* Mostrar solo las primeras 4 líneas */
    -webkit-line-clamp: 6;
    /* Agregar los puntos suspensivos */
    position: relative;
  }
`
export const ContainerSpan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
  }
  img {
    object-fit: cover;
    object-position: center;
    border-radius: 550px;
    width: 50px;
    height: 50px;
  }
`
