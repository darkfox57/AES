import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

import { Contact_Styled, InteractionsContainer } from './Contacto.Styles'
import Portada from '../../components/Portada/Portada'
import Interacciones_Contacto from '../../components/Interacciones_Contacto/Interacciones_Contacto'
import Form_Contacto from '../../components/Form_Contacto/Form_Contacto'
import Footer from '../../components/Footer/Footer'

export default function Contacto() {
  return (
    <Contact_Styled>
      <Portada
        titulo={'Contacta con AES'}
        img={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgRB_hkfY-wt_QzRCs0fqhk3UqxB9IfKovA&usqp=CAU'
        }
      ></Portada>

      <InteractionsContainer>
        <Interacciones_Contacto
          icon={<FaEnvelope size={32} />}
          subTitle={'Escríbenos'}
          details1={'asociacioneducacionsanitaria@outlook.com'}
        />

        <Interacciones_Contacto
          icon={<FaPhoneAlt size={32} />}
          subTitle={'Llámanos'}
          details1={'954812223'}
        />

        <Interacciones_Contacto
          icon={<FaMapMarkerAlt size={32} />}
          subTitle={'Encuéntranos'}
          details1={'Piura - Perú'}
        />
      </InteractionsContainer>

      <Form_Contacto />
      <Footer />
    </Contact_Styled>
  )
}
