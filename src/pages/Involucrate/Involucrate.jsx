import React from 'react'
import Portada from '../../components/Portada/Portada'
import Form_Especialistas from '../../components/Form_Especialistas/Form_Especialistas'
const img = "https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg"
export default function Involucrate() {
  return (
  <div>
    <Portada titulo={"Dale con el corazon"} img={img} />
    <Form_Especialistas/>
  </div>
  )
}
