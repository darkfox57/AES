import React from 'react'
import { useForm } from 'react-hook-form'

import TextInput from '../../utils/TextInput/TextInput'
import SelectInput from '../../utils/SelectInput/SelectInput'
import Button from '../../utils/Button/Button'

import info from './data.json'

const Form_Alianzas = () => {
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
      <h2>Postulacion para alianzas</h2>

      <form onSubmit={handleSubmit(Submit)}>
        {/**Datos para los inputs */}
        {info.text.map((data, index) => (
          <TextInput
            key={index}
            register={register}
            name={data.name}
            label={data.label}
            type={data.type}
            required={data.required}
            maxLength={data.maxLength}
            pattern={data.pattern}
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
            option={data.option}
            required={data.required}
            errors={errors}
          />
        ))}

        <div>
          <h4>¿En qué area de salud desearía recibir la capacitación?</h4>
          {/**Datos para los radiobutton */}
          {info.radius.map((data, index) => (
            <TextInput
              key={index}
              register={register}
              name={data.name}
              value={data.value}
              label={data.label}
              type={data.type}
              required={data.required}
              errors={errors}
            />
          ))}
        </div>

        <Button text="Enviar Formulario" type="primary" size="lg"></Button>
      </form>
    </div>
  )
}

export default Form_Alianzas
