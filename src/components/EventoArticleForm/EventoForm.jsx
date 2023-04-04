import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getEvent } from '../../redux/actions/event_actions'
import Portada from '../Portada/Portada'
import { EventoArticleForm } from './EventoForm.Styled'
import Form from './Form'

const EventoForm = () => {
  const dispatch = useDispatch()
  const Evento = useSelector((state) => state.event.event)
  const { slug } = useParams()

  useEffect(() => {
    const Slug = slug.split('-').join(' ')
    dispatch(getEvent(Slug))
  }, [])
  return (
    <EventoArticleForm>
      <Portada titulo={Evento.title} img={Evento.frontpage} />
      <div className='xd'>
      <span>{Evento.date} </span>
      <h1>{Evento.title}</h1>
      <p>{Evento.description}</p>
      <Form/>
      </div>
    </EventoArticleForm>
  )
}

export default EventoForm
