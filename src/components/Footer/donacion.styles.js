import styled from "styled-components";

export const DonacionSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-color: var(--main-color);
color: var(--text-white);
padding: var(--section-padding);
`

export const DonationTexts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
 h1{
    margin-bottom: 20px
 }
 //**Responsive */
 @media screen and (max-width: 1304px){
    text-align: center;
}
`



