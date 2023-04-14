import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import TextInput from '../../utils/TextInput/TextInput'
import Button from '../../utils/Button/Button'

import Desenfoque from '../../utils/Div_Desenfoque/Div_Desenfoque.Styles'
import {
  Form_Styled,
  WorkShopContainer,
  RadioButtonContainer,
  SocialNetworksContainer,
  SubmitButton,
} from '../../utils/Form_Involucrate/Form_Involucrate.Styles'

import CloseButton from '../../utils/CloseButton/CloseButton_Styles'

import { addFormAlliance } from '../../redux/actions/form_actions'
//desestructuramos ambas props recibidas en showForm
//en la funcion closemodal modificamos el estado del padre (involucrate) en '' para poder reabrir el form a futuro

const Form_Alianzas = ({ isOpen, setMainForm, areas }) => {
  const [modal, setModal] = useState(isOpen)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  const regexLetras = new RegExp('^[A-Za-zÁ-ÿ\\s]+$')
  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
  const regexNumeros = new RegExp('^[0-9]+$')

  const Submit = (data) => {
    const formData = {
      ...data,
      assistants: Number(data.assistants),
    }
    dispatch(addFormAlliance(formData))
  }

  const closeModal = (event) => {
    event.preventDefault()
    setModal(false)
    setMainForm(event)
  }

  return (
    modal && (
      <Desenfoque>
        <Form_Styled onSubmit={handleSubmit(Submit)}>
          <h2>Postulacion de organizaciones para alianzas</h2>
          <span className="subtitle">
            ¿Tu organización está interesada en recibir nuestros talleres
            totalmente gratuitos? Llena este forms para contactarnos contigo
          </span>

          {/**Campo NombreEmpresa (Texto) */}
          <TextInput
            register={register}
            name="organizations"
            label="Nombre de su organizacion: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo Mision (Texto) */}
          <TextInput
            register={register}
            name="work"
            label="Mision de su organizacion: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo NombreInscriptor (Texto) */}
          <TextInput
            register={register}
            name="fullname"
            label="Nombre completo de quien inscribe: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo Correo (Texto) */}
          <TextInput
            register={register}
            name="email"
            label="Correo de contacto: "
            type="text"
            required={true}
            pattern={regexMail}
            errors={errors}
          />

          {/**Campo Celular (Texto) */}
          <TextInput
            register={register}
            name="phone"
            label="Celular de contacto: "
            type="text"
            required={true}
            maxLength={15}
            pattern={regexNumeros}
            errors={errors}
          />

          {/**Campo Puesto (Texto) */}
          <TextInput
            register={register}
            name="post"
            label="Puesto dentro de su organizacion: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo cantVoluntarios (Texto) */}
          <TextInput
            register={register}
            name="assistants"
            label="Cuantas personas atenderán el taller: "
            type="text"
            required={true}
            pattern={regexNumeros}
            errors={errors}
          />

          <label>Tus redes sociales</label>
          <SocialNetworksContainer>
            {/**Campo Instagram (Texto) */}
            <TextInput
              register={register}
              name="instagram"
              subname="social"
              label="Instagram: "
              type="text"
              placeholder="Opcional"
              errors={errors}
            />

            {/**Campo Facebook (Texto) */}
            <TextInput
              register={register}
              name="facebook"
              subname="social"
              label="Facebook: "
              type="text"
              placeholder="Opcional"
              errors={errors}
            />

            {/**Campo Twitter (Texto) */}
            <TextInput
              register={register}
              name="twitter"
              subname="social"
              label="Twitter: "
              type="text"
              placeholder="Opcional"
              errors={errors}
            />
          </SocialNetworksContainer>

          <WorkShopContainer>
            <label>¿En qué area de salud desearía dictar el taller?</label>
            <RadioButtonContainer>
              {areas.map((data, index) => (
                <TextInput
                  key={index}
                  register={register}
                  name="areas"
                  type="radio"
                  label={data.name}
                  value={data.name}
                  required={true}
                  errors={errors}
                />
              ))}
            </RadioButtonContainer>
            {errors['taller']?.type === 'required' && (
              <span className="spanError">* La elección es obligatoría</span>
            )}
          </WorkShopContainer>

          <SubmitButton type="submit">Enviar Formulario</SubmitButton>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </Form_Styled>
      </Desenfoque>
    )
  )
}

export default Form_Alianzas
