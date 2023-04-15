import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../../../redux/actions/event_actions'
import Button from '../../../utils/Button/Button'
import EventCard from '../../Components/EventCard/EventCard'
import { EventList, Table } from './events.style'

export default function EventDash() {
  const events = useSelector((state) => state.event.events)
  return (
    <>
      <h2>Eventos</h2>
      <Button
        type="primary"
        link="/dashboard/eventos/add-blog"
        text="Crear nuevo articulo"
        size="md"
      />
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
            {events.map((event) => (
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
      </EventList>
    </>
  )
}
