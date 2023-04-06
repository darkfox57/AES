import { useState, useEffect } from 'react'

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0)

  //seteamos si la data se cambia
  useEffect(() => {
    setCurrentPage(0)
  }, [data])

  const totalPages = Math.ceil(data.length / itemsPerPage)
  // cortamos que se muestre solo de 3
  const paginatedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )
  //con esto mapeas para los botones y se renderize dinamicamente
  // Agregamos la variable pageNumbers
  const pageNumbers = []
  for (let i = 1; i < totalPages + 1; i++) {
    pageNumbers.push(i)
  }
  // siguiente paginado
  const NextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages - 1))
  }
  // anterior paginado
  const PreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 0))
  }
  // ir a una página específica
  const goToPage = (pageNumber) => {
    const newPageNumber = pageNumber - 1
    if (newPageNumber >= 0 && newPageNumber < totalPages) {
      setCurrentPage(newPageNumber)
    }
  }

  return {
    currentPage,
    totalPages,
    paginatedData,
    NextPage,
    PreviousPage,
    goToPage,
    pageNumbers,
  }
}

export default usePagination
