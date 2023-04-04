import React, { useEffect } from 'react'
import CardEventos from './CardEventos'
import { EventoContainer } from './SliderEventos.Styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../redux/actions/event_actions';

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);

const SwiperEventos = () => {
  const dispatch = useDispatch();
  const Events = useSelector((state) => state.event.events);
  
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);
  
  if (!Events.length) {
    return <p>Cargando eventos...</p>
  }

  return (
    <EventoContainer>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        //centeredSlides={true}
        //onSlideChange={(swiper) => console.log(swiper)}
      >
        {Events.map((data) => (
          <SwiperSlide className='swiper-card' key={data._id}>
            <CardEventos
              title={data.title}
              lugar={data.location}
              fecha={data.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </EventoContainer>
  );
};

export default SwiperEventos;
