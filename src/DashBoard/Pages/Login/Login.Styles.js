import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7bL6Q_t2Flc60ajcsZaQGOIKnL8zvLHi3g&usqp=CAU');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 150, 150, 0.6);

  color: var(--text-white);
  gap: 15px;

  padding: var(--section-padding);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
    padding-bottom: 20px;
  }

  img {
    width: 175px;
    height: 100px;
  }

  input {
    width: 225px;
    text-align: center;
  }

  span {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
