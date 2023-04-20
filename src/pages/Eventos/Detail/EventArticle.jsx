import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { getEvent } from '../../../redux/actions/event_actions'

import Footer from '../../../components/Footer/Footer'
import Portada from '../../../components/Portada/Portada'
import BlockEvento from './BlockEvento'

import EventSuscription from '../../../components/EventSuscription/EventSuscription'
import {
  EventoArticleForm,
  FlexInfo,
  SectionEvent,
  TextEvent,
} from './EventArticle.Styles'

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
        <FlexInfo>
          <BlockEvento event={event} />
          <TextEvent>
            <div
              dangerouslySetInnerHTML={{
                __html: event?.description,
              }}
            ></div>
          </TextEvent>
        </FlexInfo>

        <EventSuscription id={event._id} />
      </SectionEvent>
      <Footer />
    </EventoArticleForm>
  )
}

export default EventoForm
