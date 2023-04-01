import React from 'react'
import { useForm } from 'react-hook-form'
import inputs  from './data.json'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import FileInput from './FileInput'



const Form_Especialistas = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Postulación de especialistas</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/**Texto dinamico */}
        {inputs.text.map((data, index) => (
          <TextInput
            key={index}
            register={register}
            name={data.name}
            label={data.label}
            type={data.type}
            errors={errors}
          />
        ))}
        {/**seleccion dinamica*/}
        {inputs.seleccion.map((data,index) => (
          <SelectInput key={index}
          register={register}
          name={data.name}
          label={data.label}
          errors={errors}
          option={data.option} />
        ))}

        {/**Texto raidus */}
        <div>
          <h4>¿En qué area de salud desearía dictar el taller?</h4>
         {inputs.radius.map((data,index) => (
          <TextInput
          key={index}
          register={register}
          name={data.name}
          value={data.value}
          label={data.label}
          type={data.type}
          errors={errors}
        />
        ))}
          </div>
          <FileInput register={register} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Form_Especialistas
