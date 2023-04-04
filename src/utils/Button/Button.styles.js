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
      case 'link':
        return `
          background-color: transparent;
          color: var(--text-white);
          padding: 8px;
          border: none; 
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
  }};
  transition: scale 0.5s ease-in-out;

  a {
    text-decoration: none;
    color: var(--text-white);
  }
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`
