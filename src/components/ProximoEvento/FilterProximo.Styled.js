import styled from 'styled-components'

export const FilterProximosEvento = styled.div`
  display: flex;
  gap: 20px;
`

export const FilterButton = styled.div`
  font-size: 0.8rem;
  background: ${({ active }) => (active ? '#00baa3' : 'white')};
  border: none;
  border-radius: 50px;

  cursor: pointer;

  padding: 10px 20px;

  transition: transform 0.3s ease-out;
  transform: ${({ active }) => (active ? 'translateY(-10px)' : '')};

  :hover {
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    background: #00baa3;
    transform: ${({ active }) => (active ? '' : 'translateY(-10px)')};
  }
`
