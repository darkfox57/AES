import styled from "styled-components";

export const FooterContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
padding-bottom: 30px;
`

export const FooterContent = styled.div`
display: flex;
flex-wrap: wrap;
gap: 50px;
justify-content: space-evenly;
align-items: flex-start;
@media screen and (max-width: 768px) {
 flex-direction: column;
 align-items: center;
 gap: 20px;
}
`

export const FooterMenu = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
@media screen and (max-width: 768px) {
 transform: translateY(-70px);
}
li {
 list-style: none;
}
`

export const LastBlogs = styled.div``