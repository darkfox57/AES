import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import Select from 'react-select'

import TextInput from '../../utils/TextInput/TextInput'
import SelectInput from '../../utils/SelectInput/SelectInput'
import FileInput from './FileInput'
import Button from '../../utils/Button/Button'
import Desenfoque from '../../utils/Div_Desenfoque/Div_Desenfoque.Styles'
import CloseButton from '../../utils/CloseButton/CloseButton_Styles'

import { addFormSpecialist } from '../../redux/actions/form_actions'

import {
  Form_Styled,
  WorkShopContainer,
  RadioButtonContainer,
  SubmitButton,
} from '../../utils/Form_Involucrate/Form_Involucrate.Styles'

//desestructuramos ambas props recibidas en showForm
//en la funcion closemodal modificamos el estado del padre (involucrate) en '' para poder reabrir el form a futuro

const Form_Especialistas = ({ isOpen, setMainForm, areas }) => {
  const [modal, setModal] = useState(isOpen)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.form.countries)

  const regexLetras = new RegExp('^[A-Za-zÁ-ÿ\\s]+$')
  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
  const regexNumeros = new RegExp('^[0-9]+$')

  const options = countries.map((country) => {
    return { value: country.name, label: country.name }
  })

  const onSubmit = (data) => {
    const formData = {
      ...data,
      country: data.country.value,
    }
    dispatch(addFormSpecialist(formData))
  }

  const closeModal = (event) => {
    event.preventDefault()
    setModal(false)
    setMainForm(event)
  }

  return (
    modal && (
      <Desenfoque>
        <Form_Styled onSubmit={handleSubmit(onSubmit)}>
          <h2>Postulación de especialistas</h2>
          <span className="subtitle">
            ¿Estás interesado en dictar algún taller? Llena este forms para
            contactarnos contigo
          </span>

          {/**"Campo Nombre (Texto)"*/}
          <TextInput
            register={register}
            label="Nombre Completo: "
            name="fullname"
            type="text"
            errors={errors}
            required={true}
            pattern={regexLetras}
          />

          {/**Campo Correo (Texto) */}
          <TextInput
            register={register}
            label="Correo de Contacto: "
            name="email"
            type="text"
            errors={errors}
            required={true}
            pattern={regexMail}
          />

          {/**Campo Celular (Texto) */}
          <TextInput
            register={register}
            label="Celular de Contacto: "
            name="phone"
            type="text"
            maxLength={15}
            errors={errors}
            required={true}
            pattern={regexNumeros}
          />

          {/**Campo Paises (Seleccion) */}
          <SelectInput
            Controller={Controller}
            Select={Select}
            control={control}
            options={options}
            label="Seleccione su pais"
            // required={true}
            errors={errors}
          />

          {/**Campo Talleres (RadioButton) */}
          <WorkShopContainer>
            <label>¿En qué area de salud desearía dictar el taller?</label>
            <RadioButtonContainer>
              {areas.map((data, index) => (
                <TextInput
                  key={index}
                  register={register}
                  name="area"
                  type="radio"
                  label={data.name}
                  value={data.name}
                  required={true}
                  errors={errors}
                />
              ))}
              {errors['area']?.type === 'required' && (
                <span className="spanError">* La elección es obligatoría</span>
              )}
            </RadioButtonContainer>
          </WorkShopContainer>

          <label>Mandanós tu CV</label>
          <FileInput register={register} />

          <SubmitButton type="submit">Enviar Formulario</SubmitButton>

          <CloseButton onClick={closeModal}>X</CloseButton>
        </Form_Styled>
      </Desenfoque>
    )
  )
}

export default Form_Especialistas
