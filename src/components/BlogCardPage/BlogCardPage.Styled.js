import styled from 'styled-components'

export const BlogPageCardContainer = styled.div`
  border: 1px solid #d7d7d7;
  height: max-content;
  .portada {
    height: 400px;
    background: #fff url(${(props) => props.img}) center center/cover no-repeat;
  }
`
export const ContainerInfo = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  //**Responsive */
  @media screen and (max-width: 1213px){
    padding: 30px 25px;
  }
  h3{
    text-transform: capitalize;
  }
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
  }
`
export const ContainerSpan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    display: flex;
    gap: 10px;
    button{
      cursor: pointer;
      text-transform: capitalize;
      background: #ff5151;
      border: none;
      color: white;
      padding: 4px 10px;
    }
  }
  span{
  display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   .icon-card-blog{
    font-size: 1.2rem;
    color: rgb(0, 186, 163);
   }
  }
`
