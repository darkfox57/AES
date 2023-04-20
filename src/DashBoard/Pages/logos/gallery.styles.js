import styled from 'styled-components'

export const GalleryWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 50px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: flex-end;
    -webkit-box-shadow: -1px 1px 10px 1.5px #dddddd;
    -moz-box-shadow: -1px 1px 10px 1.5px #dddddd;
    box-shadow: -1px 1px 10px 1.5px #dddddd;
    position: relative;
    color: var(--main-white);
    aspect-ratio: 4/3;
    padding: 20px 20px 60px 20px;

    .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      img {
        object-fit: cover;
        height: 300px;
      }
      span {
        color: var(--main-dark);
      }
      .buttons {
       width: 100%;
       justify-content: space-between;
       display: flex;
       gap: 30px;
      }
    }
  }
`
