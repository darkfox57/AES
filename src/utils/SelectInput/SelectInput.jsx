import React from 'react'

const SelectInput = ({
  Controller,
  Select,
  control,
  options,
  label,
  required,
  errors,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label>{label}</label>
      <Controller
        name={'pais'}
        control={control}
        rules={(required = true)}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            isSearchable
            placeholder="Seleccione un país"
          />
        )}
      />
      {errors.name?.type === `required` && (
        <p>{`El campo Pais es requerido`}</p>
      )}
    </div>
  )
}

export default SelectInput
