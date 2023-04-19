import styled from "styled-components";

export const DashBoardBody = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
gap: 50px;
a {
 height: 300px;
 padding: 30px;
 color: var(--text-white);
 -webkit-box-shadow: -1px 1px 10px 1.5px #dddddd;
    -moz-box-shadow: -1px 1px 10px 1.5px #dddddd;
    box-shadow: -1px 1px 10px 1.5px #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: scale 0.3s ease-in-out;
  gap: 50px;
  h4 {
    color: var(--dash-color)
  }
  img {
    width: 150px;
  }
  &:hover {
    scale: 1.05;
  }
}

`