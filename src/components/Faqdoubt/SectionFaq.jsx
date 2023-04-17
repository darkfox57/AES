import React from 'react';
import { AnimatedSpan, SectionFaqContainer } from './SectionFaq.Styled';
import { IoMdArrowDropdown,IoMdArrowDropup } from 'react-icons/io';

const SectionFaq = ({ title, details, index, visibleIndex, setVisibleIndex }) => {
    
  const handleView = () => {
    if (visibleIndex === index) {
      // Si se hace clic en el span actualmente visible, lo cerramos
      setVisibleIndex(null);
    } else {
      // Si se hace clic en un nuevo span, lo abrimos y cerramos el anterior
      setVisibleIndex(index);
    }
  }

  return (
    <SectionFaqContainer >
     <div className='title'>
        <h3>{title}</h3>
        <button onClick={handleView}>{index ===  visibleIndex ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</button>
      </div>
      <AnimatedSpan visible={visibleIndex === index}>
        <p>{details}</p>
      </AnimatedSpan>
    </SectionFaqContainer>
  )
}

export default SectionFaq

