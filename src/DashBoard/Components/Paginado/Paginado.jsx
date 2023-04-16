import React, {useState } from 'react'
import useScroll from '../../../Hooks/useScrollTop'

const Paginado = ({
  NextPage,
  PreviousPage,
  totalPages,
  currentPage,
}) => {
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
  <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
    <button onClick={handleBack} disabled={!currentPage} >back</button>
    <span>{currentPage + 1} de {totalPages}</span>
    <button onClick={handleSkip} disabled={totalPages === (currentPage + 1)}>skip</button>
 </div>
  )
}

export default Paginado
