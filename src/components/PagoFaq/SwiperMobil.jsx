import React from 'react'
import Imagenes from './Imagenes'

import { AppVisual,AppVisualInfo} from './Plin.Styled'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Button from '../../utils/Button/Button'

SwiperCore.use([Navigation])

const SwiperMobil = ({ banco }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '50px',
        padding: '70px 0',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:"wrap",
        textAlign:"center"
      }}
    >
      <AppVisual>
        <Swiper
          navigation
          spaceBetween={0}
          slidesPerView={1}
        >
          {banco && Imagenes[banco].map((img, i) => (
            <SwiperSlide key={i} className="swiper-card">
              <img src={img} alt={banco} />
            </SwiperSlide>
          ))}
        </Swiper>
      </AppVisual>
      <AppVisualInfo>
        <h2>{banco}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae ut
          magnam doloribus aut molestiae porro nihil error consequatur
          praesentium quisquam exercitationem, laboriosam fuga quibusdam
          inventore velit! Sed, atque aperiam?
        </p>
        <Button type={"primary"} text={"Más informacion"} size={"md"} />
      </AppVisualInfo>
    </div>
  )
}

export default SwiperMobil
