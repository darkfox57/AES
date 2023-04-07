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
  subname,
  placeholder,
}) => {
  // subname = 'soyunObjeto'
  const Regex = new RegExp(pattern)
  const propForm = subname ? `${subname}.${name}` : name

  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        type={type}
        {...register(propForm, {
          required: required,
          maxLength: maxLength || false,
          pattern: Regex,
        })}
        placeholder={placeholder}
      />
      {errors[name]?.type === `required` && type !== 'radio' && (
        <p>{`El campo ${
          name.charAt(0).toUpperCase() + name.slice(1)
        } es requerido`}</p>
      )}
      {errors[name]?.type === `maxLength` && (
        <p>{`El campo ${
          name.charAt(0).toUpperCase() + name.slice(1)
        } debe tener 15 digitos maximo`}</p>
      )}
      {errors[name]?.type === `pattern` && (
        <p>{`El formato del  ${
          name.charAt(0).toUpperCase() + name.slice(1)
        } es incorrecto`}</p>
      )}
    </div>
  )
}

export default TextInput
