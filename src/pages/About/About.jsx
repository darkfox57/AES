import React from 'react'
import aboutimg from '../../assets/About.webp'
import Team from '../../components/Equipo_About/Team'
import Footer from '../../components/Footer/Footer'
import Patrocinadores from '../../components/Patrocinadores/Patrocinadores'
import Portada from '../../components/Portada/Portada'
import QuienesSomos from '../../components/QuienesSomos/QuienesSomos'
const About = () => {
  return (
    <div>
      <Portada titulo={'Acerca de PUP'} img={aboutimg} />
      <QuienesSomos />
      <Team />
      <Patrocinadores />
      <Footer />
    </div>
  )
}

export default About
