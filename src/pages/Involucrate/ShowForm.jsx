import React from 'react'

import Form_Especialistas from '../../components/Form_Especialistas/Form_Especialistas'
import Form_Instituciones from '../../components/Form_Instituciones/Form_Instituciones'
import Form_Alianzas from '../../components/Form_ Alianzas/Form_Alianzas'

//Renderiza el form correspondiente en base al estado recibido por props

export default function ShowForm({ formToShow }) {
  return (
    <>
      {formToShow === 'Form_Especialistas' && (
        <Form_Especialistas isOpen={true} />
      )}
      {formToShow === 'Form_Instituciones' && (
        <Form_Instituciones isOpen={true} />
      )}
      {formToShow === 'Form_Alianzas' && <Form_Alianzas isOpen={true} />}
    </>
  )
}
