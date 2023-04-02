import React from 'react'
import Portada from '../../components/Portada/Portada'
import Form_Especialistas from '../../components/Form_Especialistas/Form_Especialistas'
import Form_Instituciones from '../../components/Form_Instituciones/Form_Instituciones'
import Form_Alianzas from '../../components/Form_ Alianzas/Form_Alianzas'
const img =
  'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'
export default function Involucrate() {
  return (
    <div>
      <Portada titulo={'Dale con el corazon'} img={img} />
      <Form_Especialistas />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Form_Instituciones />
      <hr />
      <br />
      <br />
      <Form_Alianzas/>
      <hr />
    </div>
  )
}
