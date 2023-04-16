import styled from "styled-components";

export const InvolucrateBody = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
gap: 50px;
div {
  display: flex;
  flex-direction: column;
  align-items: center;
 padding: 30px;
 -webkit-box-shadow: -1px 1px 10px 1.5px #dddddd;
  -moz-box-shadow: -1px 1px 10px 1.5px #dddddd;
  box-shadow: -1px 1px 10px 1.5px #dddddd;
  img {
    max-width: 200px;
  }
  a {
    align-self: center;
  }
  button {
 padding: 8px 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    background-color: rgba(223, 223, 223, 0.5);
    font-family: var(--body-font);
    font-size: 0.9rem;
    max-width: 200px;
    cursor: pointer;
    color: var(--main-white);
    background-color: rgb(251, 99, 115);
    transition: scale 0.3s ease-in-out;
    &:hover {
     scale: 1.03;
    }
}
}
`