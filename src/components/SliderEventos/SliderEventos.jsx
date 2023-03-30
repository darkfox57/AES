import React, { useState } from 'react'
import ArrowButton from '../../utils/ArrowButton/ArrowButton'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CardEventos from './CardEventos'
import { EventoContainer, FlexSliderContainer, FlexCard } from './SliderEventos.Styled'
import usePagination from '../../Hooks/usePagination'
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
const SliderEventos = () => {
  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } = usePagination(eventos,3);

  return (
    <EventoContainer display="flex" justifyContent="center" alignItems="center">
      <h1>Próximos Eventos</h1>
      <FlexSliderContainer display="flex" justifyContent="center" alignItems="center">
        {currentPage > 0 && (
          <ArrowButton handleImage={PreviousPage} arrow={<FaArrowLeft />} />
        )}
        <FlexCard display="flex">
          {paginatedData.map((data) => (
            <CardEventos
              key={data.id}
              topFecha={data.topFecha}
              lugar={data.lugar}
              fecha={data.fecha}
            />
          ))}
        </FlexCard>
        {currentPage < totalPages - 1 && (
          <ArrowButton handleImage={NextPage} arrow={<FaArrowRight />} />
        )}
      </FlexSliderContainer>
    </EventoContainer>
  );
};
export default SliderEventos
