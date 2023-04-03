import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import TextInput from '../../utils/TextInput/TextInput'
import SelectInput from '../../utils/SelectInput/SelectInput'
import Button from '../../utils/Button/Button'

import info from './data.json'

import Desenfoque from '../../utils/Div_Desenfoque/Div_Desenfoque.Styles'
import Form_Styled from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import CloseButton from '../../utils/CloseButton/CloseButton_Styles'

const Form_Alianzas = ({ isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [modal, setModal] = useState(isOpen)

  const Submit = (data) => {
    console.log(data)
  }

  const closeModal = (event) => {
    event.preventDefault()
    setModal(false)
  }

  return (
    modal && (
      <Desenfoque style={{ display: 'flex', flexDirection: 'column' }}>
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
          <CloseButton onClick={closeModal}>X</CloseButton>
        </Form_Styled>
      </Desenfoque>
    )
  )
}

export default Form_Alianzas
