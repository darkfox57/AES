import React, { useState } from 'react'
import ArrowButton from '../../utils/ArrowButton/ArrowButton'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CardEventos from './CardEventos'
import { EventoContainer, FlexSliderContainer, FlexCard } from './SliderEventos.Styled'
const eventos = [
  {
    id: 1,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta anual',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 2,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta anual',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 3,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta anual',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 4,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta Miranda',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 5,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta Semanal',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
]
export const SliderEventos = () => {
  const [currentPage, setCurrentPage] = useState(0)
  // cuanta pagina mostramos
  const eventosPorPagina = 3
   // calculamos el número total de páginas
   const totalPages = Math.ceil(eventos.length / eventosPorPagina)
 // cortamos dinamicamente el array 
  const eventosPaginados = eventos.slice(
    currentPage * eventosPorPagina,
    (currentPage + 1) * eventosPorPagina
  )
 // actualizar paginado siguiente
  const handleSiguiente = () => {
    setCurrentPage(currentPage + 1)
  }
  // actualizar paginado atras
  const handleAnterior = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <EventoContainer display="flex" justifyContent="center" alignItems="center">
      <h1>Próximos Eventos</h1>
      <FlexSliderContainer display="flex" justifyContent="center" alignItems="center">
      {currentPage > 0 && <ArrowButton handleImage={handleAnterior} arrow={<FaArrowLeft />} />}
        <FlexCard display="flex">
          {eventosPaginados.map((data) => (
            <CardEventos
              key={data.id}
              topFecha={data.topFecha}
              lugar={data.lugar}
              fecha={data.fecha}
            />
          ))}
        </FlexCard>
        {currentPage < totalPages - 1 && <ArrowButton handleImage={handleSiguiente} arrow={<FaArrowRight />} />}
      </FlexSliderContainer>
    </EventoContainer>
  )
}
