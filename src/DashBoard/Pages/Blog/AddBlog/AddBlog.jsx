import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Button from '../../../../utils/Button/Button'
import TextInput from '../../../../utils/TextInput/TextInput'
//forms react
import { useForm } from 'react-hook-form'
import FileInput from '../../../../components/Form_Especialistas/FileInput'

export default function AddBlog() {
  const [postContent, setPostContent] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleData = (data) => {
    data.description = postContent // agregamos la descripcion
    console.log(data)
    // Aquí puedes enviar el contenido del post al servidor
  }
  // descipciones - imagen - nombre y categorias chexbox de un array de objetos category.name - titulo
  const categorias = [
    {
      name: 'salud',
    },
    {
      name: 'fisica',
    },
    {
      name: 'mental',
    },
  ]
  //*arreglar el scroll al cambiar la pagina para Andres **/
  return (
    <>
      <h2>Crear Articulo de Blog</h2>
      <form onSubmit={handleSubmit(handleData)}>
        <label>
          Descripción:
          <ReactQuill
            value={postContent}
            onChange={(value) => setPostContent(value)}
          />
        </label>
        {/**Input Nombre */}
        <TextInput
          label="Nombre"
          type="text"
          name="nombre"
          register={register}
          errors={errors}
          required={true}
          pattern="^[A-Za-zÁ-ÿ\s]+$"
        />
        {/**Categoria map checkbox */}
        {categorias.map((category, index) => (
          <TextInput
            key={index}
            type="checkbox"
            register={register}
            label={category.name}
            value={category.name}
            name={'categoria'}
            errors={errors}
            required={true}
          />
        ))}
        {/**Categoria error  */}
        {errors.categoria?.type === `required` && <p>Seleccione alguna categoria por favor</p>}
        {/**Imagen  updale */}
        <FileInput register={register} />
        <button type="submit">Publicar</button>
      </form>
    </>
  )
}
