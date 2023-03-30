import styled from "styled-components";

export const EventoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--section-padding);
  align-items: center;
  gap: 50px;
  & > div:first-child {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`

export const FlexSliderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`
