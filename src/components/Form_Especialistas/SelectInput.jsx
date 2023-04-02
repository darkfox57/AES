import React from 'react'

const SelectInput = ({register,label, option,name,errors,required}) => {
  return (
    <div>
        <label>{label}</label>
       <select {...register(name,{
        required:required
       })}>
          <option value={'es'}>Seleciona</option>
          {option.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </select>
        {errors[name]?.type === `required` && <p>{`El campo ${label} es requerido`}</p>}
      {errors[name]?.type === `pattern` && <p>{`El formato del  ${label} es incorrecto`}</p>}
    </div>
  )
}

export default SelectInput
