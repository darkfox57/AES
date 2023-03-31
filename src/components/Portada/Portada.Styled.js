import styled from "styled-components";

export const PortadaContainer = styled.div`
color: var(--text-white);
position: relative;
width: 100%;
background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${({Portada})=>Portada})
    center center/cover no-repeat;
    height: 600px;
    div{
        position: absolute;
        bottom: 10%;
        left: 15%;
    }
`