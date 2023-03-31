import styled from "styled-components";

export const QuieneSomos = styled.div`
width: 100%;
height: 650px;
display: flex;
justify-content: center;
align-items: center;
`
export const GridQuienes = styled.div`
min-width: 800px;
display: grid;
column-gap: 20px;
grid-template-columns: 1fr 510px;
place-items: center;
div:first-child{
    width: 560px;
    height: 400px;
    img{
        object-fit: cover;
        object-position: center;
        width:100%;
        height: 100%;
    }
}
`
export const QuienesInfo = styled.div`
display: flex;
flex-direction: column;
row-gap: 15px;
padding: 10px 40px;
h2>h2{
    color: #2ECC71;
}
p:first-child{
    color: red;
}
`