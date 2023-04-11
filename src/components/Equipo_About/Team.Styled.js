import styled from 'styled-components'

export const TeamFlex = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  background: rgb(0, 186, 163);
  height: max-content;
  padding: var(--section-padding);
  .grid {
    width: 100%;
    place-items: center;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  }
`
