import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  padding: var(--section-padding);
  background: var(--primary-blue);
  color: var(--text-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const GalleryContainer = styled.div`
  column-width: 400px;

`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  button {
    border: none;
    background-color: var(--main-color);
    color: var(--text-white);
    padding: 8px 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: scale 0.3s ease-in-out;
    &:hover {
      scale: 1.05;
    }
  }
`
