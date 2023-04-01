import styled from "styled-components";

export const DonacionSection = styled.section`
display: flex;
flex-wrap: wrap;
width: 100%;
padding: var(--section-padding);
place-content: center center;
align-items: center;
background-color: var(--main-color);
color: var(--text-white);
`

export const DonationTexts = styled.div`
 max-width: 600px;
 padding: 50px;
`

export const DonationInputs = styled.div`
max-width: 600px;
display: flex;
gap: 20px;
flex-wrap: wrap;
padding: 50px;
`

export const InputDonacion = styled.input`
 padding: 15px 25px;
 border-radius: 30px;
 color: var(--text-white);
 background-color: var(--primary-blue);
 outline: none;
 border: 2px solid var(--text-white);
 max-width: 200px;
 &::placeholder {
  color: var(--text-white);
 }
&[type='button'] {
 background-color: var(--main-white);
 color: var(--text-color);
}
`

