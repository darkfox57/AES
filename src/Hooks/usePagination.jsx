import { useState, useEffect } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0);

  //seteamos si la data se cambia
  useEffect(() => {
    setCurrentPage(0);
  }, [data]);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // cortamos que se muestre solo de 3
  const paginatedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
 // siguiente paginado
  const NextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages - 1));
  };
 // anterior paginado
  const PreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 0));
  };


  return {
    currentPage,
    totalPages,
    paginatedData,
    NextPage,
    PreviousPage,
  };
};

export default usePagination