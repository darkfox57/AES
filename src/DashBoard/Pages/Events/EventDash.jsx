import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import usePagination from '../../../Hooks/usePagination'
import { getAllEvents } from '../../../redux/actions/event_actions'
import Button from '../../../utils/Button/Button'
import Paginado from '../../Components/Paginado/Paginado'
import EventCard from './EventCard/EventCard'
import { EventList, Table } from './events.style'

export default function EventDash() {
  const events = useSelector((state) => state.event.events)

  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(events, 8)

  return (
    <>
      <h2>Eventos</h2>
      <Link to={`/dashboard/eventos/add-event`}>
        <button className="dashBtn">Crear nuevo evento</button>
      </Link>

      <EventList>
        <Table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Fin</th>
              <th>Ubicación</th>
              <th>Editar</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((event) => (
              <EventCard
                key={event._id}
                id={event._id}
                image={event.frontpage}
                title={event.title}
                status={event.status}
                date={event.createdAt}
                slug={event.slug}
                categories={event.categories}
                description={event.description}
                tags={event.tags}
                location={event.location}
                start={event.date_in}
                end={event.date_out}
                short_description={event.short_description}
                files={event.files}
              />
            ))}
          </tbody>
        </Table>
        <Paginado
          currentPage={currentPage}
          totalPages={totalPages}
          PreviousPage={PreviousPage}
          NextPage={NextPage}
        />
      </EventList>
    </>
  )
}
