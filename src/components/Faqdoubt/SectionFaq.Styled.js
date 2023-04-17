import styled from 'styled-components';

export const SectionFaqContainer = styled.div`
  //background: #181818;
  padding: 15px 0px;
  max-width: 746px;
  border-bottom: 2px solid var(--secondary-color);
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      color: rgb(255, 81, 81);
        font-size: 2rem;
      background: none;
      border: 0;
    }
  }
  h3 {
    font-size: 23px;
  }
`;

export const AnimatedSpan = styled.span`
  display: block;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? '1000px' : '0px')};
  transition: max-height ${({ visible }) => (visible ? '4s' : '0.6s')} ease;
`;