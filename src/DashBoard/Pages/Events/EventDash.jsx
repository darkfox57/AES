import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../../../redux/actions/event_actions'
import Button from '../../../utils/Button/Button'
import EventCard from '../../Components/EventCard/EventCard'
import { EventList } from './events.style'

export default function EventDash() {
  const events = useSelector((state) => state.event.events)
  return (
    <>
      <h2>Eventos</h2>
      <Button
        type="primary"
        link="/dashboard/blog/add-blog"
        text="Crear nuevo articulo"
        size="md"
      />
      <EventList>
        <div className="eventHeader">
          <span>Imagen</span>
          <span>Titulo</span>
          <span>Fecha de Inicio</span>
          <span>Fecha de Fin</span>
          <span>Ubicación</span>
          <span>Editar</span>
          <span>Activar/Desactivar</span>
        </div>
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
          />
        ))}
      </EventList>
    </>
  )
}
