import styled from "styled-components";

export const BlogList = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
.blogHeader {
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
`