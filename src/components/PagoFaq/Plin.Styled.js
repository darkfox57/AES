import styled from 'styled-components'

export const PlinContainer = styled.div`
 flex-direction: column;
display: flex;
justify-content: center;
align-items: center;

`

export const BancosContainer = styled.div`
  background: rgb(255, 81, 81);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
 border: 1px solid red;

  img {
    width: 13%;
    min-width: 110px;
    object-fit: contain;
    cursor: pointer;
    aspect-ratio: 3/2;
    margin: 10px;
    filter: saturate(0);
    :hover {
      filter: saturate(1);
    }
  }
`
export const AppVisual = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: ${({banco}) => banco === "bcp" ? "400px" : "600px"};
&> div:first-child{
    width: 100%;
 }
.swiper-card{
    display: flex;
    justify-content: center;
    align-items: center;
img{
    object-fit: contain;
    //object-fit: ${({banco}) => banco === "bcp" ? "cover" : "contain"};
    //height: 530px;
   // width: 280px;
    height: ${({banco}) => banco === "bcp" ? "500px" : "530px"};
    width: ${({banco}) => banco === "bcp" ? "500px" : "530px"};
}
}
`
export const AppVisualInfo = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
h2{
    text-transform: capitalize;
}
p{
    max-width: 500px;
}
`