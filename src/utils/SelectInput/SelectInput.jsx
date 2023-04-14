import React from 'react'

import { SelectInputStyled } from './SelectInput.Styles'

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
    <>
      <SelectInputStyled>
        {label}
        <Controller
          name={'country'}
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
          <span>{`El campo Pais es requerido`}</span>
        )}
      </SelectInputStyled>
    </>
  )
}

export default SelectInput
