import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { getEvent } from '../../redux/actions/event_actions'

import Portada from '../Portada/Portada'
import BlockEvento from './BlockEvento'
import Footer from '../Footer/Footer'

import {
  EventoArticleForm,
  FlexInfo,
  SectionEvent,
  TextEvent,
} from './EventoForm.Styled'

const EventoForm = () => {
  const dispatch = useDispatch()
  const event = useSelector((state) => state.event.event)
  const { slug } = useParams()

  useEffect(() => {
    dispatch(getEvent(slug))
  }, [])

  const imgprueba =
    'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'

  return (
    <EventoArticleForm>
      <Portada titulo={event.title} img={event.frontpage} />
      <SectionEvent>
        <figure>
          <img src={imgprueba} alt={event.title} />
        </figure>
        <FlexInfo>
          <TextEvent>
            <p>{event.description}</p>
          </TextEvent>
          <BlockEvento event={event} />
        </FlexInfo>
      </SectionEvent>
      <Footer />
    </EventoArticleForm>
  )
}

export default EventoForm
