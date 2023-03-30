import styled from 'styled-components'

export const Slider_Stylizied = styled.section`
  background: url(${({ image }) => image}) center center/cover no-repeat;
  color: var(--text-white);
  width: 100%;
  min-height: 750px;
  padding: 150px 0;
  text-align: center;
  p {
    padding: 25px;
    max-width: 500px;
  }

  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  transition: background-image 1s ease-in-out;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`
