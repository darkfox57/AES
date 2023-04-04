import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../utils/Button/Button'
import TextInput from '../../../../utils/TextInput/TextInput'
//forms react
import { useForm } from 'react-hook-form'
import FileInput from '../../../../components/Form_Especialistas/FileInput'
import { addBlog, getCategories } from '../../../../redux/actions/blog_actions'

export default function AddBlog() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.blog.categories)
  const estado = useSelector((state) => state.blog.status)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const [postContent, setPostContent] = useState('')
  const [reqMessage, setReqMessage] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleData = (data) => {
    data.description = postContent
    const file = data.archivo[0]
    const imgUrl = file
      ? URL.createObjectURL(file)
      : 'https://blog.oxfamintermon.org/wp-content/uploads/2014/11/ONG-copia-e1415635063990.jpg'
    setImageUrl(imgUrl)

    const formData = {
      title: data.name,
      description: data.description,
      image: imageUrl,
      category: data.category,
      status: 'active',
    }

    dispatch(addBlog(formData))
    estado === 'succeeded'
      ? setReqMessage('Creado Correctamente')
      : setReqMessage(estado)
    console.log(estado)
  }

  //*arreglar el scroll al cambiar la pagina para Andres **/
  return (
    <>
      <h2>Crear Articulo de Blog</h2>
      <form onSubmit={handleSubmit(handleData)}>
        {/**Input Nombre */}
        <TextInput
          label="Nombre"
          type="text"
          name="name"
          register={register}
          errors={errors}
          required={true}
          pattern="^[A-Za-zÁ-ÿ\s]+$"
        />
        {/**Input Description */}
        <label>
          Descripción:
          <ReactQuill
            name="description"
            value={postContent}
            onChange={(value) => setPostContent(value)}
          />
        </label>
        {/**Categoria map checkbox */}
        {categories.map((category, index) => (
          <label key={category._id}>
            <TextInput
              type="checkbox"
              register={register}
              value={category.name}
              name={'category'}
              errors={errors}
              required={false}
            />
            {category.name}
          </label>
        ))}
        {/**Categoria error  */}
        {errors.categoria?.type === `required` && (
          <p>Seleccione alguna categoria por favor</p>
        )}
        {/**Imagen  updale */}
        <FileInput register={register} name="image" />
        <button type="submit">Publicar</button>
        <span>{reqMessage}</span>
      </form>
    </>
  )
}
