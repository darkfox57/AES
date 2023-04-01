import React from 'react'

const pattern = {
    correo: /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/,
    nombre: /^[A-Za-zÁ-ÿ\s]+$/
}

const TextInput = ({label, type,name,register,errors,value}) => {
  return (
    <div>
 <label>{label}</label>
    <input value={value} type={type}  {...register(name,{
        required:true,
        maxLength:false,
        pattern: pattern[name]
      })} />
       {errors[name]?.type === `required` && <p>{`El campo ${label} es requerido`}</p>}
      {errors[name]?.type === `pattern` && <p>{`El formato del  ${label} es incorrecto`}</p>}
    </div>
  )
}

export default TextInput
