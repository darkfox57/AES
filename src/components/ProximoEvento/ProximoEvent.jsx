import React, { useEffect } from 'react'
import Portada from '../Portada/Portada'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import FilterProximos from './FilterProximos'
import CardProximos from './CardProximos'
import { getAllEvents } from '../../redux/actions/event_actions'

const ProximoEvent = () => {
  const Events = useSelector((state) => state.event.events)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllEvents())
  }, [])

  const imgprueba =
    'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'
  return (
    <>
      <Portada titulo="Próximos eventos" img={imgprueba} />
      <div
        style={{
          gap: '50px',
          padding: '75px 10%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FilterProximos />
        {Events.map((event) => (
          <CardProximos
            key={event._id}
            description={event.description}
            img={event.frontpage}
            date={event.date}
            lugar={event.location}
            title={event.title}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default ProximoEvent
