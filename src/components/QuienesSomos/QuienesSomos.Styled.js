import styled from "styled-components";

export const QuieneSomosContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const GridQuienes = styled.div`
padding: var(--section-padding);
display: flex;
flex-wrap: wrap;
gap: 20px;
place-items: center;
div:first-child{
    max-width: 500px;
    img{
        object-fit: cover;
        object-position: center;
        width:100%;
        height: auto;
    }
}
`
export const QuienesInfo = styled.div`
display: flex;
flex-direction: column;
row-gap: 15px;
padding: 10px 40px;
max-width: 500px;
span{
    color: #2ECC71;
}
p:first-child{
    color: red;
}
`