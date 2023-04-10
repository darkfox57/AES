import styled from "styled-components";

export const BlogBody = styled.section`
    width: 100%;
    padding: var(--section-padding);
    place-content: center;
    display: grid;
    gap: 30px;
    grid-template-areas: 
    "filtro filtro"
    "card menus";
    grid-template-columns: min-content 400px;
.filtroOrder{
    grid-area: filtro;
    display: flex;
    gap: 10px;
}
`

export const GridCardBlog = styled.div`
 grid-area: card;
display:grid;
gap:20px;
height: max-content;
`
export const ContainerMenuBlog = styled.div`
 grid-area: menus;
display: flex;
flex-direction: column;
row-gap: 50px;
//height:500px;
`