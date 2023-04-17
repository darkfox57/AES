import styled from "styled-components";

export const HomeContainer = styled.div`
   background:black;
   position: relative;
  .ContainerSlider{
    width:100%;
    height: 100vh;
   .slider{
    
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        object-fit:cover;
        object-position:center;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity:0.7;
    }
   }
  }
`