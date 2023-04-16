import React, { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Select from 'react-select'

import CloseButton from '../../utils/CloseButton/CloseButton_Styles'
import Desenfoque from '../../utils/Div_Desenfoque/Div_Desenfoque.Styles'
import PdfUploader from '../../utils/FileUploader/pdfUploader'
import SelectInput from '../../utils/SelectInput/SelectInput'
import TextInput from '../../utils/TextInput/TextInput'

import { addFormSpecialist } from '../../redux/actions/form_actions'

import {
  Form_Styled,
  RadioButtonContainer,
  SubmitButton,
  WorkShopContainer,
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
  const uploadedFile = useSelector((state) => state.file.pdfUrl)
  const modalRef = useRef(null)
  const MySwal = withReactContent(Swal)

  const regexLetras = new RegExp('^[A-Za-zÁ-ÿ\\s]+$')
  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
  const regexTelefono = new RegExp('^\\+(?:[0-9]-?){6,14}[0-9]$')

  const options = countries.map((country) => {
    return { value: country.name, label: country.name }
  })

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

  const errorNotify = async ({ errorMsg }) => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMsg,
    })
  }

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      country: data.country.value,
      filepath: uploadedFile,
    }
    if (!uploadedFile) {
      let errorMsg = 'Por favor, recuerde de mandar su CV!'
      errorNotify(errorMsg)
    } else {
      try {
        dispatch(addFormSpecialist(formData))
        return notification()
      } catch (error) {
        let errorMsg =
          'Oops... Al parecer hubo un error al mandar el formulario. Vuelve a intentarlo!'
        errorNotify(errorMsg)
      }
    }
  }

  return (
    modal && (
      <Desenfoque onClick={handleModalVisibility}>
        <Form_Styled onSubmit={handleSubmit(onSubmit)} ref={modalRef}>
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
            placeholder={'Ej: miemail@gmail.com'}
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
            placeholder={'Ej: +120345678'}
            maxLength={15}
            errors={errors}
            required={true}
            pattern={regexTelefono}
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
                  value={data._id}
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
          <PdfUploader />

          <SubmitButton type="submit">Enviar Formulario</SubmitButton>

          <CloseButton onClick={closeModal}>X</CloseButton>
        </Form_Styled>
      </Desenfoque>
    )
  )
}

export default Form_Especialistas
