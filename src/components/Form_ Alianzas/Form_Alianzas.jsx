import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import TextInput from '../../utils/TextInput/TextInput'
import Button from '../../utils/Button/Button'

import info from './data.json'

import Desenfoque from '../../utils/Div_Desenfoque/Div_Desenfoque.Styles'
import Form_Styled from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import CloseButton from '../../utils/CloseButton/CloseButton_Styles'

import { addFormAlliance } from '../../redux/actions/form_actions'
//desestructuramos ambas props recibidas en showForm
//en la funcion closemodal modificamos el estado del padre (involucrate) en '' para poder reabrir el form a futuro

const Form_Alianzas = ({ isOpen, setMainForm }) => {
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
    dispatch(addFormAlliance(data))
  }

  const closeModal = (event) => {
    event.preventDefault()
    setModal(false)
    setMainForm(event)
  }

  return (
    modal && (
      <Desenfoque style={{ display: 'flex', flexDirection: 'column' }}>
        <Form_Styled onSubmit={handleSubmit(Submit)}>
          <h2>Postulacion para alianzas</h2>

          {/**Campo NombreEmpresa (Texto) */}
          <TextInput
            register={register}
            name="nombreOrganizacion"
            label="Nombre de su organizacion: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo Mision (Texto) */}
          <TextInput
            register={register}
            name="mision"
            label="Mision de su organizacion: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo NombreInscriptor (Texto) */}
          <TextInput
            register={register}
            name="nombreInstructor"
            label="Nombre completo de quien inscribe: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo Correo (Texto) */}
          <TextInput
            register={register}
            name="correo"
            label="Correo de contacto: "
            type="text"
            required={true}
            pattern={regexMail}
            errors={errors}
          />

          {/**Campo Celular (Texto) */}
          <TextInput
            register={register}
            name="celular"
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
            name="puesto"
            label="Cargo que ocupa dentro de su organizacion: "
            type="text"
            required={true}
            pattern={regexLetras}
            errors={errors}
          />

          {/**Campo cantVoluntarios (Texto) */}
          <TextInput
            register={register}
            name="cantIntegrantes"
            label="Cantidad de personas que atenderán el taller: "
            type="text"
            required={true}
            pattern={regexNumeros}
            errors={errors}
          />

          <h4>Tus redes sociales</h4>
          {/**Campo Instagram (Texto) */}
          <TextInput
            register={register}
            name="instagram"
            subname="redesSociales"
            label="Instagram: "
            type="text"
            placeholder="Opcional"
            errors={errors}
          />

          {/**Campo Facebook (Texto) */}
          <TextInput
            register={register}
            name="facebook"
            subname="redesSociales"
            label="Facebook: "
            type="text"
            placeholder="Opcional"
            errors={errors}
          />

          {/**Campo Twitter (Texto) */}
          <TextInput
            register={register}
            name="twitter"
            subname="redesSociales"
            label="Twitter: "
            type="text"
            placeholder="Opcional"
            errors={errors}
          />

          <div>
            <h4>¿En qué area de salud desearía recibir la capacitación?</h4>

            {/**Campo Talleres (RadioButton) */}
            {info.radius.map((data, index) => (
              <TextInput
                key={index}
                register={register}
                name={'taller'}
                type={'radio'}
                value={data.value}
                label={data.label}
                required={true}
                errors={errors}
              />
            ))}
            {errors['taller']?.type === 'required' && (
              <p style={{ color: 'red' }}>Por favor eliga uno</p>
            )}
          </div>

          <button
            type="submit"
            style={{ height: '50px', width: '150px' }}
            value="Alianzas"
            {...register('origen')}
          >
            Enviar Formulario
          </button>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </Form_Styled>
      </Desenfoque>
    )
  )
}

export default Form_Alianzas
