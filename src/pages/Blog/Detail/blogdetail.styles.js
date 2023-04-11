import styled from 'styled-components'

export const BlogDetailBody = styled.article`
  //padding: var(--section-padding);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  .flexx {
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    border-radius: 10px;
    transform: translateY(-50px);
    background: white;
    border: 1px solid rgb(215, 215, 215);
    max-width: 1100px;
    padding: 40px 60px;
    //**reponsive */
@media screen and (max-width: 678px){
  padding: 40px 40px;
  h2{
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 561px){
  padding: 40px 20px;
  h2{
    font-size: 2.2rem;
  }
}
    span {
      color: white;
      padding: 5px 10px;
      background: rgb(255, 81, 81);
      align-self: flex-start;
    }
    .imgContainer {
      background: black;
      position: relative;
      height: 500px;
      border-radius: 10px;
      overflow: hidden;
      img {
        opacity: 0.6;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s ease-in-out;
        :hover{
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
        }
      }
      .categoryflex {
        position: absolute;
        top: 20px;
        left: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
      }
    }
  }
`
