import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardDetail from '../../../../Components/Modal/CardDetail'

export default function ParticipantCard({
  id,
  name,
  email,
  userEvents,
  submit,
  view,
  activeModal,
  captureIdModal,
  submition,
  setSelectedCard,
}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(view)

  const events = useSelector((state) => state.event.events)

  const edited = useSelector((state) => state.blog.confirmation)

  return (
    <>
      <tr>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{email}</p>
        </td>
        <td>
          {events
            .filter(
              (event) =>
                userEvents.includes(event._id) &&
                event._id !== null &&
                event._id !== undefined
            )
            .map((event) => {
              console.log(event)
              if (event.title.length > 0) {
                return <p key={event._id}>{event.title}</p>
              } else {
                return <p key={event._id}>Evento eliminado</p>
              }
            })}
        </td>

        <td>
          {' '}
          {new Date(submit).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </td>
        {activeModal && (
          <CardDetail
            submition={submition}
            type={'institucion'}
            setSelectedCard={setSelectedCard}
          />
        )}
      </tr>
    </>
  )
}
