import React, { useEffect, useState } from 'react'
//compoentes swiper
import { Swiper, SwiperSlide } from 'swiper/react'
//autopaly
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
//css
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/swiper-bundle.min.css'
import { getAllFiles } from '../../redux/actions/gallery_actions'

SwiperCore.use([Autoplay])
SwiperCore.use([Pagination])
SwiperCore.use([Navigation])

import { HomeContainer } from './HomeSlider.Styled'
import SwiperInfo from './SwiperInfo'

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const dispatch = useDispatch()
  const files = useSelector((state) => state.gallery.files)

  useEffect(() => {
    dispatch(getAllFiles())
  }, [])
  return (
    <HomeContainer>
      <Swiper
        className="ContainerSlider"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        navigation
        spaceBetween={0} // gap
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        //onSwiper={(swiper) => console.log(swiper)}
      >
        {files
          .filter((file) => file.origin === 'slider')
          .map((image) => (
            <SwiperSlide className="slider" key={image._id}>
              <img src={image.url} alt={image.title} />
              <SwiperInfo title={image.title} subtitle={image.subtitle} />
            </SwiperSlide>
          ))}
      </Swiper>
    </HomeContainer>
  )
}

export default HomeSlider
