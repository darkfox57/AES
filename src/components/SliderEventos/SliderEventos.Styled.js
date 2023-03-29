/*import styled from "styled-components";

export const EventoContainer = styled.div`
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
row-gap: 30px;
`
export const FlexSliderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
column-gap: 20px;
` 

export const GridCard = styled.div`
 display: grid;
 grid-template-columns: repeat(3,1fr);
 column-gap: 15px;
`*/
import styled from "styled-components";

const Container = styled.div`
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export const EventoContainer = styled(Container)`
  border: 1px solid black;
  flex-direction: column;
  row-gap: 30px;
`;

export const FlexSliderContainer = styled(Container)`
  column-gap: 20px;
`;

export const FlexCard = styled(Container)`
  /*display: grid;
  grid-template-columns: repeat(3, 1fr);*/
  column-gap: 15px;
`;
