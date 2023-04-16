import React, { useEffect, useState } from 'react'
import { BtnPaginadoFlex, Btnpage, Button } from './BtnPaginado.Styled'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import useScroll from '../../Hooks/useScrollTop'

const BtnPaginado = ({
  pageNumbers,
  posts,
  goToPage,
  NextPage,
  PreviousPage,
  totalPages,
  currentPage,
}) => {
  const [index, setIndex] = useState(1)

  useEffect(() => {
     setIndex(1)
  }, [posts])

  const handlePage = (e) => {
    setIndex(parseInt(e.target.value))
    goToPage(parseInt(e.target.value))
    useScroll(520)
  }

  const handleSkip = () => {
    NextPage()
    setIndex(index + 1)
    useScroll(520)
  }

  const handleBack = () => {
    PreviousPage()
    setIndex(index - 1)
    useScroll(520)
  }

  return (
    <>
      <BtnPaginadoFlex>
        <Button onClick={handleBack} disabled={!currentPage}>
          <MdKeyboardArrowLeft size={35} />
        </Button>
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
       {<Button onClick={handleSkip} disabled={totalPages === (currentPage + 1)}>
          <MdKeyboardArrowRight size={35} />
        </Button>}
      </BtnPaginadoFlex>
    </>
  )
}

export default BtnPaginado
