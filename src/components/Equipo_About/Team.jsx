import React from 'react'
import Button from '../../utils/Button/Button'
import CardTeam from './CardTeam'
import { TeamFlex } from './Team.Styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation,Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, Navigation, Pagination]);

const data = [
  {
    name: 'Gerardo Osorio',
    cargo: 'Coordinador(a) de logística',
    src: 'https://www.youtube-nocookie.com/embed/DmCZoiCp5C0?controls=0',
  },
  {
    name: 'Kevin Cotrina',
    cargo: 'Relaciones Públicas',
    src: 'https://www.youtube-nocookie.com/embed/DmCZoiCp5C0?controls=0',
  },
  {
    name: 'Rick Quito',
    cargo: 'Talento Humano',
    src: 'https://www.youtube-nocookie.com/embed/DmCZoiCp5C0?controls=0',
  },
  {
    name: 'Gerardo Osorio',
    cargo: 'Ceo',
    src: 'https://www.youtube-nocookie.com/embed/DmCZoiCp5C0?controls=0',
  },
  {
    name: 'Gerardo Osorio',
    cargo: 'Ceo',
    src: 'https://www.youtube-nocookie.com/embed/DmCZoiCp5C0?controls=0',
  },
  {
    name: 'Gerardo Osorio',
    cargo: 'Ceo',
    src: 'https://www.youtube-nocookie.com/embed/DmCZoiCp5C0?controls=0',
  },
]
const Team = () => {
  return (
    <TeamFlex>
      <Swiper
        /*autoplay={{
          delay: 5000,
          disableOnInteraction:true,
        }}*/
        //loop={true}
        navigation
       // pauseOnMouseEnter
        spaceBetween={20}
        pagination={{ clickable: true }}
       // slidesPerView={4}
        breakpoints={{
          // Configuración para pantallas más pequeñas
          1458: {
            slidesPerView: 2
          },
          // Configuración para pantallas aún más pequeñas
          1036: {
            slidesPerView: 1
          }
        }}
        //centeredSlides={true}
        //onSlideChange={(swiper) => console.log(swiper)}
      >
        
        {data.map((team, index) => (
          <SwiperSlide className='swiper-card' key={index}>
          <CardTeam
            src={team?.src}
          />
        </SwiperSlide>
        ))}
      </Swiper>
      <Button size="lg" type="primary" text={'Contactanos'} link="/contacto" />
    </TeamFlex>
  )
}

export default Team
