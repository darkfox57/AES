import styled from "styled-components";

export const BlogBody = styled.section`
    padding: var(--section-padding);
    place-content: center;
    display: grid;
    gap: 30px;
    grid-template-areas: 
    "filtro filtro"
    "card menus";
    grid-template-columns: minmax(550px, 700px) 400px; 
.filtroOrder{
  //border: 1px solid red;
    grid-area: filtro;
    display: flex;
    gap: 10px;
}
//**responsive */
@media screen and (max-width: 1071px){
  grid-template-columns: minmax(100%, 700px); 
  grid-template-areas: 
    "filtro"
    "menus "
    "card ";
}
@media screen and (max-width: 594px){
  padding: 50px 15px;//15
}
`

export const GridCardBlog = styled.div`
position: relative;
grid-area: card;
display:grid;
gap:20px;
height: max-content;
`
export const ContainerMenuBlog = styled.div`
position: relative;
grid-area: menus;
.fixedMenu{
display: flex;
flex-direction: column;
row-gap: 20px;
height: 850px;
overflow-y: auto;
position: sticky;
top: 70px;
::-webkit-scrollbar {
  width: 10px; 
}
::-webkit-scrollbar-track {
  background-color: #fff; 
}


::-webkit-scrollbar-thumb {
  background-color: rgb(255, 81, 81); 
  border-radius: 5px; 
}
//**reponsive */
@media screen and (max-width: 1071px){
  height: max-content;
}
}

`