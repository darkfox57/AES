import styled from 'styled-components'

export const ContactSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-around;
  align-items: center;
  padding: 50px 25px;
  background-color: var(--main-dark);
  max-width: 1200px;
  transform: translateY(-75px);
  margin: auto;
  position: relative;
  img {
    height: 75px;
    width: auto;
  }
  &::before {
    width: 95%;
    height: 10px;
    bottom: -10px;
    content: '';
    background-color: var(--primary-blue);
    position: absolute;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: var(--text-white);
  i {
    color: var(--main-color);
    background-color: var(--main-white);
    border-radius: 50px;
    padding: 10px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 1.3rem;
      line-height: 1.4rem;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  button {
    color: var(--main-color);
    background-color: var(--main-white);
    border-radius: 50px;
    padding: 10px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
