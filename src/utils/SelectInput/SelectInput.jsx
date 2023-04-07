import React from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'

const SelectInput = ({ register, errors, required, name, label, type }) => {
  const countries = useSelector((state) => state.form.countries)

  const options = countries.map((country) => {
    return { value: country.name, label: country.name }
  })

  return (
    <>
      <Select
        {...register(name, {
          required: required,
        })}
        options={options}
        isSearchable
        placeholder="Seleccione un país"
      />

      {errors[name]?.type === `required` &&
        type !== 'radio' &&
        type !== 'checkbox' && <p>{`El campo ${label} es requerido`}</p>}
      {errors[name]?.type === `pattern` && (
        <p>{`El formato del  ${label} es incorrecto`}</p>
      )}
    </>
  )
}

export default SelectInput
