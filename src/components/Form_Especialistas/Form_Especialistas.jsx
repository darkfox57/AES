import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import Select from 'react-select'
import inputs from './data.json'

import TextInput from '../../utils/TextInput/TextInput'
import SelectInput from '../../utils/SelectInput/SelectInput'
import FileInput from './FileInput'

import Button from '../../utils/Button/Button'

import Desenfoque from '../../utils/Div_Desenfoque/Div_Desenfoque.Styles'
import Form_Styled from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import CloseButton from '../../utils/CloseButton/CloseButton_Styles'

import { addFormSpecialist } from '../../redux/actions/form_actions'

//desestructuramos ambas props recibidas en showForm
//en la funcion closemodal modificamos el estado del padre (involucrate) en '' para poder reabrir el form a futuro

const Form_Especialistas = ({ isOpen, setMainForm }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const countries = useSelector((state) => state.form.countries)

  const options = countries.map((country) => {
    return { value: country.name, label: country.name }
  })

  const [modal, setModal] = useState(isOpen)

  const onSubmit = (data) => {
    const formData = {
      ...data,
      pais: data.pais.value,
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
      <Desenfoque style={{ display: 'flex', flexDirection: 'column' }}>
        <Form_Styled onSubmit={handleSubmit(onSubmit)}>
          <h2>Postulación de especialistas</h2>

          {/**Texto dinamico */}
          {inputs.text.map((data, index) => (
            <label key={index}>
              <TextInput
                register={register}
                name={data.name}
                type={data.type}
                errors={errors}
                required={data.required}
                maxLength={data.maxLength}
                pattern={data.pattern}
              />
              {data.label}
            </label>
          ))}

          {/**Texto seleccion */}
          <Controller
            name="pais"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                isSearchable
                placeholder="Seleccione un país"
              />
            )}
          />
          {errors.pais?.type === `required` && (
            <p>{`El campo Pais es requerido`}</p>
          )}
          {errors.pais?.type === `pattern` && (
            <p>{`El formato del campo Pais es incorrecto`}</p>
          )}

          {/**Texto raidus */}
          <div>
            <h4>¿En qué area de salud desearía dictar el taller?</h4>
            {inputs.radius.map((data, index) => (
              <label key={index}>
                <TextInput
                  register={register}
                  name={data.name}
                  value={data.value}
                  type={data.type}
                  required={data.required}
                  errors={errors}
                />
                {data.label}
              </label>
            ))}
            {errors['cargo']?.type === 'required' && (
              <p style={{ color: 'red' }}>Por favor eliga uno</p>
            )}
          </div>

          <FileInput register={register} />

          <button
            type="submit"
            style={{ height: '50px', width: '50px' }}
            value="Especialista"
            {...register('origen')}
          >
            Enviar Fomrulario
          </button>
          <CloseButton onClick={closeModal} name="">
            X
          </CloseButton>
        </Form_Styled>
      </Desenfoque>
    )
  )
}

export default Form_Especialistas
