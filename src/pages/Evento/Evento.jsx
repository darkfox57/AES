import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import usePagination from '../../Hooks/usePagination'

import BtnPaginado from '../../components/BtnPaginado/BtnPaginado'
import Portada from '../../components/Portada/Portada'
import Footer from '../../components/Footer/Footer'
import CardProximos from '../../components/ProximoEvento/CardProximos'
import FilterProximos from '../../components/ProximoEvento/FilterProximos'

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
    console.log(events),
    (
      <>
        <Portada
          img={
            'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'
          }
          titulo={'Eventos'}
        />

        <EventContainer>
          <FilterProximos />

          {paginatedData.map((event) => (
            <CardProximos
              key={event._id}
              description={event.description}
              img={event.frontpage}
              date={event.date}
              lugar={event.location}
              title={event.title}
            />
          ))}
        </EventContainer>

        <BtnPaginado
          pageNumbers={pageNumbers}
          PreviousPage={PreviousPage}
          posts={events}
          NextPage={NextPage}
          goToPage={goToPage}
        />
        <Footer />
      </>
    )
  )
}
