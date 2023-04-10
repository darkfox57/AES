import styled from 'styled-components'

export const LastBlogsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const BlogContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 8px;

  & > div {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  & > div:nth-child(2) {
    flex-direction: column;

    & > span:first-child {
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 10px 2px #e3e3e3;
  }
`
