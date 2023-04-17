import styled from 'styled-components'

export const Sliders = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(600px, 100%), 1fr));
  gap: 50px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    -webkit-box-shadow: -1px 1px 10px 1.5px #dddddd;
    -moz-box-shadow: -1px 1px 10px 1.5px #dddddd;
    box-shadow: -1px 1px 10px 1.5px #dddddd;
    position: relative;
    overflow: hidden;
    color: var(--text-white);
    aspect-ratio: 16/9;
    img {
      object-fit: cover;
      z-index: -1;
    }
    .content {
      position: absolute;
      bottom: 30px;
      left: 30px;
      button {
        padding: 8px 15px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        border: none;
        background-color: rgba(223, 223, 223, 0.5);
        font-family: var(--body-font);
        font-size: 0.9rem;
        max-width: 200px;
        cursor: pointer;
        color: var(--main-white);
        background-color: rgb(251, 99, 115);
        transition: scale 0.3s ease-in-out;
        &:hover {
          scale: 1.1;
        }
      }
    }
  }
`

export const AddBtn = styled.button`
  padding: 8px 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border: none;
  background-color: rgba(223, 223, 223, 0.5);
  font-family: var(--body-font);
  font-size: 0.9rem;
  max-width: 200px;
  cursor: pointer;
  color: var(--main-white);
  background-color: rgb(251, 99, 115);
  transition: scale 0.3s ease-in-out;
  margin-bottom: 50px;
  /* float: right; */
  &:hover {
    scale: 1.03;
  }
`