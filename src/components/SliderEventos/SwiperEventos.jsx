import React, { useEffect } from 'react'
import CardEventos from './CardEventos'
import { EventoContainer } from './SliderEventos.Styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../../redux/actions/event_actions'

SwiperCore.use([Autoplay])
SwiperCore.use([Navigation])

const SwiperEventos = () => {
  const dispatch = useDispatch()
  const Events = useSelector((state) => state.event.swiperEvents)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [])

  if (!Events.length) {
    return <p>Cargando eventos...</p>
  }

  return (
    <EventoContainer>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation
        spaceBetween={20}
       // slidesPerView={4}
        breakpoints={{
          1458: {
            slidesPerView: 4
          },
          1080: {
            slidesPerView: 3
          },
          754: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        }}
      >
        {Events.map((data) => (
          <SwiperSlide className="swiper-card" key={data._id}>
            <CardEventos
              img={data.frontpage}
              slug={data.slug}
              title={data.title}
              lugar={data.location}
              fecha={data.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </EventoContainer>
  )
}

export default SwiperEventos
