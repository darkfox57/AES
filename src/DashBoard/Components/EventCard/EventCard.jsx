import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editEvent } from '../../../redux/actions/event_actions'
import Button from '../../../utils/Button/Button'
import { CardContainer, ToggleButton } from './eventCard.styles'

export default function EventCard({
  image,
  title,
  status,
  id,
  slug,
  categories,
  description,
  tags,
  start,
  end,
  location,
}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(status)

  const handleClick = () => {
    const post = {
      id,
      title,
      description,
      image,
      status: !active,
      categories: categories.map((c) => c._id),
      tags: tags.map((t) => t._id),
      location,
      start: new Date(start).toISOString().slice(0, 10),
      end: new Date(end).toISOString().slice(0, 10),
    }
    dispatch(editEvent(post))
    setActive(active ? false : true)
  }

  // useEffect(() => {
  //   setActive(active ? false : true)
  // }, [edited.message])

  return (
    <>
      <CardContainer>
        <img src={image} alt={title} />
        <p>{title}</p>
        <span>
          Empieza:
          {new Date(start).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </span>
        <span>
          Termina:
          {new Date(end).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </span>
        <span>{location}</span>
        <Button
          type="primary"
          text="Editar"
          size="lg"
          link={`/dashboard/eventos/edit/${slug}`}
        />
        <div>
          <ToggleButton
            className={`${active ? ' active' : ''}`}
            type="button"
            onClick={handleClick}
            aria-pressed={status}
            autoComplete="off"
          >
            <div className="handle"></div>
          </ToggleButton>
        </div>
      </CardContainer>
    </>
  )
}
