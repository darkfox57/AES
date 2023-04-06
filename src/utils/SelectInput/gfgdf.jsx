import React from 'react'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

const CountrySelect = ({ name }) => {
  const { register } = useForm()
  const countries = useSelector((state) => state.form.countries)

  const options = countries.map((country) => {
    return { value: country.name, label: country.name }
  })

  return (
    <Select
      {...register(name)}
      options={options}
      isSearchable
      placeholder="Seleccione un país"
    />
  )
}

export default CountrySelect
