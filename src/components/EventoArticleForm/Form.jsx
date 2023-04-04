import React from 'react'
import { useForm } from 'react-hook-form'
import Form_Styled from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import info from './data.json'
import TextInput from '../../utils/TextInput/TextInput'
import SelectInput from '../../utils/SelectInput/SelectInput'
import Button from '../../utils/Button/Button'

const Form = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm()

const Submit = (data) => {
    console.log(data)
  }
  return (
    <Form_Styled onSubmit={handleSubmit(Submit)}>
          <h2>Postulacion para alianzas</h2>

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
        </Form_Styled>
  )
}

export default Form
