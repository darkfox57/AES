import React from 'react'

import About_Home from '../../components/About_Home/About_Home'
import Actions from '../../components/Actions/Actions'
import BannerCita from '../../components/Banner_Cita/BannerCita'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Patrocinadores from '../../components/Patrocinadores/Patrocinadores'
import Slider from '../../components/Slider/Slider'
import SliderEventos from '../../components/SliderEventos/SliderEventos'
import Talleres from '../../components/Talleres/Talleres'

export default function Home() {
  return (
    <>
      <Slider
        data={[
          {
            id: 0,
            text: 'Formando una sólida cultura sanitaria en los adolescentes para crear una país saludable',
            image:
              'https://www.pabloyglesias.com/wp-content/uploads/2022/06/bosque-oscuro.jpg',
          },
          {
            id: 1,
            text: 'Bosque oscuro 2',
            image:
              'https://w0.peakpx.com/wallpaper/991/222/HD-wallpaper-forest-dark-background-dark.jpg',
          },
          {
            id: 2,
            text: 'Bosque oscuro 3',
            image:
              'https://img3.wallspic.com/previews/3/5/6/4/2/124653/124653-bosque_oscuro-x750.jpg',
          },
        ]}
      />
      <Actions />
      <About_Home />
      <Talleres />
      <BannerCita />
      <Blog />
      <Patrocinadores />
      <SliderEventos />
      <Footer />
    </>
  )
}
