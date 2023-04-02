import React from 'react'
import { useForm } from 'react-hook-form'
import inputs from './data.json'
import TextInput from '../../utils/TextInput/TextInput'
import SelectInput from '../../utils/SelectInput/SelectInput'
import FileInput from './FileInput'

import Button from '../../utils/Button/Button'

import { ModalWrapper, Form_Styled } from './Form_Especialistas.Styles'

const Form_Especialistas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <ModalWrapper style={{ display: 'flex', flexDirection: 'column' }}>
      <Form_Styled onSubmit={handleSubmit(onSubmit)}>
        <h2>Postulación de especialistas</h2>

        {/**Texto dinamico */}
        {inputs.text.map((data, index) => (
          <TextInput
            key={index}
            register={register}
            name={data.name}
            label={data.label}
            type={data.type}
            errors={errors}
            required={data.required}
            maxLength={data.maxLength}
            pattern={data.pattern}
          />
        ))}
        {/**seleccion dinamica*/}
        {inputs.seleccion.map((data, index) => (
          <SelectInput
            key={index}
            register={register}
            name={data.name}
            label={data.label}
            errors={errors}
            required={data.required}
            option={data.option}
          />
        ))}

        {/**Texto raidus */}
        <div>
          <h4>¿En qué area de salud desearía dictar el taller?</h4>
          {inputs.radius.map((data, index) => (
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
        <FileInput register={register} />

        <Button text="Enviar Formulario" type="primary" size="lg"></Button>
      </Form_Styled>
    </ModalWrapper>
  )
}

export default Form_Especialistas
