import styled from 'styled-components'

export const RedeSocial = styled.div`
  padding: 30px 23px;
  border: 2px solid #d7d7d7;
  h4 {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 20px;
    .icon-follow {
      color: rgb(255, 81, 81);
    }
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    li {
      border: 1px solid #e7e7e7;
      display: grid;
      place-content: center;
      width: 45px;
      height: 45px;
      border-radius: 500px;
      background: white;
      transition: all 0.2s ease-in-out;
      :hover {
        transform: scale(1.05);
        cursor: pointer;
        box-shadow: rgb(227, 227, 227) 0px 0px 10px 2px;

      }
      .ico-redes {
        font-size: 1.5rem;
        color: rgb(255, 81, 81);
      }
    }
  }
`
