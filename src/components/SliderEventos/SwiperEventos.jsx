import React from 'react'
import CardEventos from './CardEventos'
import { EventoContainer } from './SliderEventos.Styled'
//aqui
import { Swiper, SwiperSlide } from 'swiper/react';
//autopaly
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper';
//css
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const eventos = [
  {
    id: 1,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta anual',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 2,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta anual',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 3,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta anual',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 4,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta Miranda',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
  {
    id: 5,
    fecha: '24 Abril de 2023',
    topFecha: 'Subasta Semanal',
    lugar: '🎁M12/A Miranda Hall Town Hal Street New York, United States',
  },
]

const SwiperEventos = () => {
  return (
    <EventoContainer>
      <Swiper
       autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      loop={true}
      navigation
      spaceBetween={20}// gap
      slidesPerView={3}
      centeredSlides={true}
      //onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      //onSwiper={(swiper) => console.log(swiper)}
    >
        {eventos.map((data) => (
          <SwiperSlide className='swiper-card' key={data.id}>
          <CardEventos
            topFecha={data.topFecha}
            lugar={data.lugar}
            fecha={data.fecha}
          />
          </SwiperSlide>
        ))}
        </Swiper>
    </EventoContainer>
  )
}

export default SwiperEventos
