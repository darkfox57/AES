import React from 'react'
import Imagenes from './Imagenes'

import { AppVisual, AppVisualInfo, Containermovil } from './Plin.Styled'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Button from '../../utils/Button/Button'

SwiperCore.use([Navigation])

const SwiperMobil = ({ banco }) => {
  return (
    <>
      {banco && (
        <Containermovil>
          <AppVisual banco={banco}>
            <Swiper navigation spaceBetween={0} slidesPerView={1}>
              {Imagenes[banco].map((img, i) => (
                <SwiperSlide key={i} className="swiper-card">
                  <img src={img} alt={banco} />
                </SwiperSlide>
              ))}
            </Swiper>
          </AppVisual>
          <AppVisualInfo>
            <h2>{banco}</h2>
            {banco === 'bcp' && (
              <p>
                El Banco de Crédito del Perú es un banco peruano, fundado en
                1889. Es propiedad del conglomerado financiero Credicorp. El BCP
                es considerado la entidad bancaria más grande del país.
              </p>
            )}
            {banco === 'bbva' && (
              <p>
                El Banco Bilbao Vizcaya Argentaria, más conocido por la sigla
                BBVA, es un banco español con sede en Bilbao. Es una de las
                mayores entidades financieras del mundo y sus principales
                mercados son España, Argentina, Colombia, México, Perú,
              </p>
            )}
            {banco === 'interbank' && (
              <p>
                Interbank es un banco peruano, fundado en 1897. Es uno de las
                principales instituciones financieras del país. Es propiedad del
                conglomerado Intercorp.
              </p>
            )}
            {banco === 'scotiabank' && (
              <p>
                Scotiabank, conocido oficialmente como The Bank of Nova Scotia,
                es uno de los cinco grandes bancos de Canadá. Es el tercer banco
                por el volumen de sus activos, y el segundo más grande por
                capitalización de mercado.
              </p>
            )}
            {banco !== 'bcp' && <Button  type={'primary'} link={"https://plin.pe"} a={true} text={'Más informacion'} size={'md'} />}
            {banco === 'bcp' && <Button  type={'primary'} link={"https://www.yape.com.pe"} a={true} text={'Más informacion'} size={'md'} />}
          </AppVisualInfo>
        </Containermovil>
      )}
    </>
  )
}

export default SwiperMobil
