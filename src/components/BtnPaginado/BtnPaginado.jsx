import React, { useEffect, useState } from 'react'
import { BtnPaginadoFlex, Btnpage } from './BtnPaginado.Styled'

const BtnPaginado = ({
  pageNumbers,
  posts,
  goToPage,
  NextPage,
  PreviousPage,
}) => {
  const [index, setIndex] = useState(1)

  useEffect(() => {
    setIndex(1)
  }, [posts])

  const handlePage = (e) => {
    setIndex(parseInt(e.target.value))
    goToPage(parseInt(e.target.value))
  }

  const handleSkip = () => {
    NextPage()
    setIndex(index + 1)
  }

  const handleBack = () => {
    PreviousPage()
    setIndex(index - 1)
  }

  return (
    <>
      <BtnPaginadoFlex>
        <button onClick={handleBack}>Back</button>
        {pageNumbers.map((item, i) => (
          <Btnpage
            key={i}
            value={item}
            page={index === item}
            onClick={handlePage}
          >
            {item}
          </Btnpage>
        ))}
        <button onClick={handleSkip}>Skip</button>
      </BtnPaginadoFlex>
    </>
  )
}

export default BtnPaginado
