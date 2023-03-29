import styled from 'styled-components'

export const Slider_Stylizied = styled.section`
  background-image: url(${({ image }) => image});
  color: var(--text-white);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  min-height: 550px;
  padding: 150px 0;

  text-align: center;

  p {
    padding: 25px;
    max-width: 500px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-image 1s ease-in-out;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`
