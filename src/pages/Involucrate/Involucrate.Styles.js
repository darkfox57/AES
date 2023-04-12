import styled from 'styled-components'

export const Involucrate_Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: var(--section-padding);
  gap: 30px;
`

export const Card_Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const Card_Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background-image: url(${({ bgImage }) => bgImage});
  background-position: center;
  background-size: cover;

  color: var(--text-white);
  text-align: left;

  gap: 20px;
  padding: 40px;
  margin-bottom: 5%;

  height: auto;
  width: 400px;

  h3 {
    max-width: 100%;
    min-height: 3.6em;
    font-size: 1.5em;
  }

  p {
    max-width: 100%;
    margin-top: 0;
    margin-bottom: auto;
    font-size: 1em;
    flex-grow: 1;
  }

  button {
    align-self: center;
    font-size: 1em;
  }

  @media (max-width: 768px) {
    height: fit-content;
    width: 100%;
  }
`

export const Button_Styled = styled.button`
  padding: 12px 22px;

  background-color: transparent;
  border-radius: 10px;
  color: var(--text-white);
  border: 1px var(--text-white) solid;
  opacity: 0.8;

  transition: scale 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    scale: 1.1;
  }
`
