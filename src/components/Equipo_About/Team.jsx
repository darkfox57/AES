import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../utils/Button/Button'
import CardTeam from './CardTeam'
import { TeamFlex } from './Team.Styled'

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, Navigation, Pagination])

const Team = () => {
  const files = useSelector((state) => state.gallery.files)
  const videos = files.filter((file) => file.origin === 'videos')
  return (
    <TeamFlex>
      <h2>Testimonios</h2>
      <div className="teamflex">
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
              slidesPerView: 2,
            },
            // Configuración para pantallas aún más pequeñas
            1036: {
              slidesPerView: 1,
            },
          }}
          //centeredSlides={true}
          //onSlideChange={(swiper) => console.log(swiper)}
        >
          {videos.map((video) => (
            <SwiperSlide className="swiper-card" key={video._id}>
              <CardTeam src={video.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TeamFlex>
  )
}

export default Team
