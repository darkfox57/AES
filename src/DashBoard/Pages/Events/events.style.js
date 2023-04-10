import styled from "styled-components";

export const EventList = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
.eventHeader {
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
`
