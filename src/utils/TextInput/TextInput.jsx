import React from 'react'

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
}) => {
  const Regex = new RegExp(pattern)
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        type={type}
        {...register(name, {
          required: required,
          maxLength: maxLength || false,
          pattern: Regex,
        })}
      />
      {errors[name]?.type === `required` &&
        type !== 'radio' &&
        type !== 'checkbox' && <p>{`El campo ${label} es requerido`}</p>}
      {errors[name]?.type === `maxLength` && (
        <p>{`El campo ${label} debe tener 15 digitos maximo`}</p>
      )}
      {errors[name]?.type === `pattern` && (
        <p>{`El formato del  ${label} es incorrecto`}</p>
      )}
    </div>
  )
}

export default TextInput
