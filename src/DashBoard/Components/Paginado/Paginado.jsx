import React, { useState } from 'react'
import useScroll from '../../../Hooks/useScrollTop'
import { PaginadoContainer } from './paginado.syle'

const Paginado = ({ NextPage, PreviousPage, totalPages, currentPage }) => {
  const [index, setIndex] = useState(1)

  const handleSkip = () => {
    NextPage()
    setIndex(index + 1)
    useScroll(0)
  }

  const handleBack = () => {
    PreviousPage()
    setIndex(index - 1)
    useScroll(0)
  }
  return (
    <PaginadoContainer>
      <button
        className={`dashBtn ${!currentPage && 'disabled'}`}
        onClick={handleBack}
      >
        Ant.
      </button>
      <span>
        {currentPage + 1} de {totalPages}
      </span>
      <button
        className={`dashBtn ${totalPages === currentPage + 1 && 'disabled'}`}
        onClick={handleSkip}
      >
        Sig.
      </button>
    </PaginadoContainer>
  )
}

export default Paginado
