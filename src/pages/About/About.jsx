import React from 'react'
import Team from '../../components/Equipo_About/Team'
import Footer from '../../components/Footer/Footer'
import Patrocinadores from '../../components/Patrocinadores/Patrocinadores'
import Portada from '../../components/Portada/Portada'
import QuienesSomos from '../../components/QuienesSomos/QuienesSomos'
import About from '../../assets/About.webp'
const About = () => {
  return (
    <div>
      <Portada mision={"Nuestra Misión: Salud, Educación, Voluntariados"} titulo={"Acerca de PUP"} img={About} />
      <QuienesSomos/>
      <Team/>
      <Patrocinadores/>
      <Footer/>
    </div>
  )
}

export default About
