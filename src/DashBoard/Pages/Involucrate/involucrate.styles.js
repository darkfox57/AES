import styled from "styled-components";

export const InvolucrateBody = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
gap: 50px;
div {
 height: 300px;
 background-color: #fb6373;
 padding: 30px;
 color: var(--text-white);
 -webkit-box-shadow: -1px 1px 10px 1.5px #dddddd;
  -moz-box-shadow: -1px 1px 10px 1.5px #dddddd;
  box-shadow: -1px 1px 10px 1.5px #dddddd;
}
`