import React from 'react'
import { useForm } from 'react-hook-form'

import TextInput from '../Form_Especialistas/TextInput'
import SelectInput from '../Form_Especialistas/SelectInput'
import Button from '../../utils/Button'

import info from './data.json'

//Reutilize los componentes que creo emma anteriormente
//Creo un nuevo data.json para tenerlo de referencia y completar campos

export default function Form_Instituciones() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const Submit = (data) => {
    console.log(data)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Postulacion de organizaciones</h2>

      <form onSubmit={handleSubmit(Submit)}>
        {/**Datos para los inputs */}
        {info.text.map((data, index) => (
          <TextInput
            key={index}
            register={register}
            name={data.name}
            label={data.label}
            type={data.type}
            errors={errors}
          />
        ))}

        {/**Datos para los selectores */}
        {info.seleccion.map((data, index) => (
          <SelectInput
            key={index}
            register={register}
            name={data.name}
            label={data.label}
            errors={errors}
            option={data.option}
          />
        ))}

        <div>
          <h4>¿En qué area de salud desearía dictar el taller?</h4>

          {/**Datos para los radiobutton */}
          {info.radius.map((data, index) => (
            <TextInput
              key={index}
              register={register}
              name={data.name}
              value={data.value}
              label={data.label}
              type={data.type}
              errors={errors}
            />
          ))}
        </div>

        <Button text="Enviar Formulario" type="primary" size="lg"></Button>
      </form>
    </div>
  )
}
