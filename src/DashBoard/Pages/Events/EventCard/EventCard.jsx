import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  editEvent,
  getAllEvents,
} from '../../../../redux/actions/event_actions'
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
  short_description,
  files,
}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(status)

  const handleClick = async () => {
    const post = {
      _id: id,
      title,
      description,
      short_description,
      image,
      status: !active,
      categories: categories.map((c) => c._id),
      tags: tags.map((t) => t._id),
      location,
      start,
      end,
    }
    await dispatch(editEvent(post)).finally(() => dispatch(getAllEvents()))
    setActive(active ? false : true)
  }

  // useEffect(() => {
  //   setActive(active ? false : true)
  // }, [edited.message])

  return (
    <>
      <tr>
        <td>
          <img src={image} alt={title} />
        </td>
        <td>{title}</td>
        <td>
          {new Date(start).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </td>
        <td>
          {new Date(end).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </td>
        <td>{location}</td>
        <td>
          <Link to={`/dashboard/eventos/edit/${slug}`}>
            <button className="dashBtn">Editar</button>
          </Link>
        </td>
        <td>
          <ToggleButton
            className={`${active ? ' active' : ''}`}
            type="button"
            onClick={handleClick}
            aria-pressed={status}
            autoComplete="off"
          >
            <div className="handle"></div>
          </ToggleButton>
        </td>
      </tr>
    </>
  )
}
