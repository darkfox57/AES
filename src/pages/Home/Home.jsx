import React from 'react'

import About_Home from '../../components/Swiper_Home_Portada/About_Home'
import Actions from '../../components/Actions/Actions'
import BannerCita from '../../components/Banner_Cita/BannerCita'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Patrocinadores from '../../components/Patrocinadores/Patrocinadores'
import Talleres from '../../components/Talleres/Talleres'
import HomeSlider from '../../components/Swiper_Home_Portada/HomeSlider'
import SwiperEventos from '../../components/SliderEventos/SwiperEventos'

export default function Home() {
  return (
    <>
      <HomeSlider/>
      <Actions />
      <About_Home />
      <Talleres />
      <BannerCita />
      <Blog />
      <Patrocinadores />
      <SwiperEventos/>
      <Footer />
    </>
  )
}
