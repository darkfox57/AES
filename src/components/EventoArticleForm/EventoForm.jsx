import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getEvent } from '../../redux/actions/event_actions'
import Portada from '../Portada/Portada'
import {
  EventoArticleForm,
  FlexInfo,
  SectionEvent,
  TextEvent,
} from './EventoForm.Styled'
import Form from './Form'
import BlockEvento from './BlockEvento'
import Footer from '../Footer/Footer'

const EventoForm = () => {
  const dispatch = useDispatch()
  const Evento = useSelector((state) => state.event.event)
  const { slug } = useParams()
  useEffect(() => {
    dispatch(getEvent(slug))
  }, [])
  const imgprueba ="https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg"
  const lorem ='Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa tenetur, voluptate architecto deleniti voluptatibus magni maxime, veniam a id, ad beatae provident corporis iste animi. Odio omnis alias non.'
  return (
    <EventoArticleForm>
      <Portada titulo={Evento?.title} img={Evento?.frontpage} />
      <SectionEvent>
        <figure>
          <img src={imgprueba} alt={Evento?.title} />
        </figure>
        <FlexInfo>
          <TextEvent>
            
            <p>{Evento?.description + lorem}</p>
          </TextEvent>
          <BlockEvento Evento={Evento} />
        </FlexInfo>
        <Form/>
      </SectionEvent>
      <Footer/>
    </EventoArticleForm>
  )
}

export default EventoForm
