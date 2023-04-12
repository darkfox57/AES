import React from 'react'

import { TextInputStyled } from './TextInput.Styles'

const TextInput = ({
  label,
  type,
  name,
  register,
  errors,
  value,
  required,
  pattern,
  maxLength,
  subname,
}) => {
  const Regex = new RegExp(pattern)
  const propForm = subname ? `${subname}.${name}` : name

  return (
    <>
      <TextInputStyled>
        {label}
        <input
          value={value}
          type={type}
          {...register(propForm, {
            required: required,
            maxLength: maxLength || false,
            pattern: Regex,
          })}
        />

        {errors[name]?.type === `required` && type !== 'radio' && (
          <span className="spanError">{`* Este campo es requerido`}</span>
        )}
        {errors[name]?.type === `maxLength` && (
          <span className="spanError">{`Este campo acepta como maximo 15 digitos`}</span>
        )}
        {errors[name]?.type === `pattern` && (
          <span className="spanError">{`El formato de este campo es incorrecto`}</span>
        )}
      </TextInputStyled>
    </>
  )
}

export default TextInput
