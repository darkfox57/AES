import styled from "styled-components";

export const TeamFlex = styled.div`
 display: flex;
 flex-direction: column;
 row-gap: 50px;
 justify-content: center;
 align-items: center;
 background: #2ECC71;
 height: max-content;
 padding: 80px 0;
 .grid {
    place-items: center;
    width: 1400px;
    //width: 80%;
    display: grid;
    gap: 10px;
    grid-template-columns:  repeat(auto-fit, minmax(min(310px, 100%), 1fr));
 }
`