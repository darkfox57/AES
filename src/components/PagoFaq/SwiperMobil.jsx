import React from 'react'
import Imagenes from './Imagenes'

import { AppVisual,AppVisualInfo,Containermovil} from './Plin.Styled'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Button from '../../utils/Button/Button'

SwiperCore.use([Navigation])

const SwiperMobil = ({ banco }) => {
  return (
    <>
   {banco && <Containermovil>
      <AppVisual banco={banco}>
        <Swiper
          navigation
          spaceBetween={0}
          slidesPerView={1}
        >
           {Imagenes[banco].map((img, i) => (
            <SwiperSlide key={i} className="swiper-card">
              <img src={img} alt={banco} />
            </SwiperSlide>
          ))}
        </Swiper>
      </AppVisual>
      <AppVisualInfo  >
        <h2>{banco}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae ut
          magnam doloribus aut molestiae porro nihil error consequatur
          praesentium quisquam exercitationem, laboriosam fuga quibusdam
          inventore velit! Sed, atque aperiam?
        </p>
        <Button type={"primary"} text={"Más informacion"} size={"md"} />
      </AppVisualInfo>
    </Containermovil>}
    </>
  )
}

export default SwiperMobil
