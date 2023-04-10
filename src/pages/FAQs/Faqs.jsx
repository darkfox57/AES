import React from 'react'
import Portada from '../../components/Portada/Portada'
import FaqDoubt from '../../components/Faqdoubt/FaqDoubt'
import Footer from '../../components/Footer/Footer'

export default function Faqs() {
  return (
    <div>
      <Portada
        titulo="Tus dudas las respondemos aqui"
        img={
          'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'
        }
      />  
        <FaqDoubt/>
      <Footer/>
    </div>
  )
}
