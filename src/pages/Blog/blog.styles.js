import styled from "styled-components";

export const BlogBody = styled.section`
    width: 100%;
    padding: var(--section-padding);
    place-content: center;
    display: grid;
    gap: 30px;
    grid-template-columns: min-content 400px;
`

export const GridCardBlog = styled.div`
display:grid;
gap:20px;
height: max-content;
`
export const ContainerMenuBlog = styled.div`
display: flex;
flex-direction: column;
row-gap: 50px;
//height:500px;
`