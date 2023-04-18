import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import TextInput from '../../utils/TextInput/TextInput'

import Button from '../../utils/Button/Button'
import CloseButton from '../../utils/CloseButton/CloseButton_Styles'

import Desenfoque from '../../utils/Div_Desenfoque/Div_Desenfoque.Styles'
import {
  Form_Styled,
  WorkShopContainer,
  RadioButtonContainer,
  SubmitButton,
} from '../../utils/Form_Involucrate/Form_Involucrate.Styles'

import { addFormInstitution } from '../../redux/actions/form_actions'

//desestructuramos ambas props recibidas en showForm
//en la funcion closemodal modificamos el estado del padre (involucrate) en '' para poder reabrir el form a futuro

export default function Form_Instituciones({ isOpen, setMainForm, areas }) {
  const [modal, setModal] = useState(isOpen)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const error = useSelector((state) => state.form.error)
  const modalRef = useRef(null)
  const MySwal = withReactContent(Swal)

  const regexLetras = new RegExp('^[A-Za-zÁ-ÿ\\s]+$')
  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
  const regexTelefono = new RegExp('^\\+(?:[0-9]-?){6,14}[0-9]$')

  const closeModal = (event) => {
    event.preventDefault()
    setModal(false)
    setMainForm(event)
  }

  const handleModalVisibility = (event) => {
    // si el clic ocurre fuera de la ventana modal, la cerramos
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModal(false)
      setMainForm(event)
    }
  }

  const notification = async () => {
    await MySwal.fire({
      icon: 'success',
      title: 'Genial',
      text: 'El formulario ha sido enviado exitosamente!',
    })
  }

  const errorNotify = async () => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Lo sentimos, el formulario no ha podido enviarse adecuadamente!',
    })
  }

  const Submit = (data) => {
    dispatch(addFormInstitution(data))

    if (error) {
      return errorNotify()
    } else {
      return notification()
    }
  }

  return (
    modal && (
      <Desenfoque onClick={handleModalVisibility}>
        <Form_Styled onSubmit={handleSubmit(Submit)} ref={modalRef}>
          <h2>Postulacion de instituciones</h2>
          <span className="subtitle">
            ¿Tu institución está interesada en recibir nuestros talleres
            totalmente gratuitos? Llena este forms para contactarnos contigo
          </span>

          {/**Campo NombreOrganizacion (Texto) */}
          <TextInput
            register={register}
            name="organization"
            label="Nombre de la institución educativa: "
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
            pattern={regexTelefono}
            errors={errors}
          />

          {/**Campo Puesto (Texto) */}
          <TextInput
            register={register}
            name="post"
            label="Cargo que ocupa dentro de la institución: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo Ciudad (Texto) */}
          <TextInput
            register={register}
            name="city"
            label="Indique su ciudad correspondiente: "
            type="text"
            required={true}
            pattern={regexLetras}
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
                  value={data._id}
                  required={true}
                  errors={errors}
                />
              ))}
            </RadioButtonContainer>
            {errors['area']?.type === 'required' && (
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
