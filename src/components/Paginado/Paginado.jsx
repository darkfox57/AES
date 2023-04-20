import React, { useState } from 'react'
import { Pagination } from '@mantine/core'
import useScroll from '../../Hooks/useScrollTop'
const Paginado = ({ totalPages, goToPage }) => {
  //**paginacion */
  const [activePage, setPage] = useState(1)

  //console.log(usePagination);
  const handleClick = (pag) => {
    setPage(pag)
    goToPage(pag)
    useScroll(520)
  }

  return (
    <>
      <Pagination
        siblings={1}
        position="center"
        withEdges
        value={activePage}
        size="lg"
        onChange={handleClick}
        total={totalPages}
        color="red"
        radius="xl"
      />
    </>
  )
}

export default Paginado
