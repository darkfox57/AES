import styled from 'styled-components'

export const ButtonStyle = styled.button`
  border: none;
  ${({ type }) => {
    switch (type) {
      case 'primary':
        return `
         background-color: var(--primary-blue);
         color: var(--text-white);
       `
      case 'secondary':
        return `
    background-color: transparent;
         color: var(--text-white);
         border: 1px var(--text-white) solid;
         opacity: 0.8;
         `
    }
  }};
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
   border-radius: 20px;
   padding: 8px 14px;
   `
      case 'md':
        return `
    border-radius: 22px;
   padding: 12px 22px;
    `
      case 'lg':
        return `
    border-radius: 30px;
   padding: 12px 30px;
     `
    }
  }}

  a {
    text-decoration: none;
    color: var(--text-white);
  }
`
