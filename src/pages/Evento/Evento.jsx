import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import usePagination from '../../Hooks/usePagination'

import BtnPaginado from '../../components/BtnPaginado/BtnPaginado'
import Portada from '../../components/Portada/Portada'
import Footer from '../../components/Footer/Footer'
import CardProximos from '../../components/ProximoEvento/CardProximos'
import FilterProximos from '../../components/ProximoEvento/FilterProximos'
import SearchEvent from '../../components/SearchEvent/SearchEvent'

import { EventContainer } from './Evento.Styles'

import { getAllEvents } from '../../redux/actions/event_actions'

export default function Evento() {
  const dispatch = useDispatch()
  const events = useSelector((state) => state.event.filteredEvents)

  const {
    currentPage,
    totalPages,
    paginatedData,
    NextPage,
    PreviousPage,
    pageNumbers,
    goToPage,
  } = usePagination(events, 5)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [])

  return (
    <>
      <Portada
        img={
          'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'
        }
        titulo={'Eventos'}
      />

      <EventContainer>
        <SearchEvent />
        <FilterProximos />

        {paginatedData.map((event) => (
          <CardProximos
            key={event._id}
            slug={event.slug}
            description={event.description}
            img={event.frontpage}
            date={event.date}
            lugar={event.location}
            title={event.title}
          />
        ))}
        {!paginatedData.length && (
          <span className="spanError">
            Error: No se han encontrado eventos con sus elecciones
          </span>
        )}
      </EventContainer>

      {paginatedData.length && (
        <BtnPaginado
          pageNumbers={pageNumbers}
          PreviousPage={PreviousPage}
          posts={events}
          NextPage={NextPage}
          goToPage={goToPage}
        />
      )}
      <Footer />
    </>
  )
}
