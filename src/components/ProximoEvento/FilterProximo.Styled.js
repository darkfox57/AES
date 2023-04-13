import styled from 'styled-components'

export const FilterProximosEvento = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const FilterButton = styled.div`
  background: ${({ active }) => (active ? '#00baa3' : 'white')};

  border: none;
  border-radius: 50px;

  font-size: 0.8rem;
  color: ${({ active }) => (active ? 'var(--main-white)' : '')};

  cursor: pointer;

  padding: 10px 20px;

  transition: transform 0.3s ease-out;

  :hover {
    background: #00baa3;

    color: var(--main-white);

    cursor: ${({ active }) => (active ? 'default' : 'pointer')};

    transform: ${({ active }) => (active ? '' : 'translateY(-10px)')};
  }
`
