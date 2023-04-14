import React from 'react'

import Form_Especialistas from '../../components/Form_Especialistas/Form_Especialistas'
import Form_Instituciones from '../../components/Form_Instituciones/Form_Instituciones'
import Form_Alianzas from '../../components/Form_ Alianzas/Form_Alianzas'

//Renderiza el form correspondiente en base al estado recibido por props
//Hacemos que cada form reciba como props la funcion que actualiza el estado 'form' de involucrate

export default function ShowForm({ formToShow, updateForm, areas }) {
  return (
    <>
      {formToShow === 'Form_Especialistas' && (
        <Form_Especialistas
          isOpen={true}
          setMainForm={updateForm}
          areas={areas}
        />
      )}
      {formToShow === 'Form_Instituciones' && (
        <Form_Instituciones
          isOpen={true}
          setMainForm={updateForm}
          areas={areas}
        />
      )}
      {formToShow === 'Form_Alianzas' && (
        <Form_Alianzas isOpen={true} setMainForm={updateForm} areas={areas} />
      )}
    </>
  )
}
