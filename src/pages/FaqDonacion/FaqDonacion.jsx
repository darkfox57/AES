import React from 'react'
import Portada from '../../components/Portada/Portada'
import Footer from '../../components/Footer/Footer'
import PagoFaq from '../../components/PagoFaq/PagoFaq'
const img = "https://pbs.twimg.com/media/FSnBwNmUYAIndAI?format=jpg&name=large"
const FaqDonacion = () => {
  return (
    <div>
      <Portada img={img} titulo="¿Como donar por Yape o Plin?"/>
      <PagoFaq/>
      <Footer/>
    </div>
  )
}

export default FaqDonacion
