import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Image = styled.img`
  display: block;
  border-radius: 20px;

  padding: 10px 5px;

  animation: ${fadeIn} 0.7s ease-in-out;
`
