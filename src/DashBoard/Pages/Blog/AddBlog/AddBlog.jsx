import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  addBlog,
  getCategories,
  getTags,
} from '../../../../redux/actions/blog_actions'
import { FormBody } from './addBlog.styles'

export default function AddBlog() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.blog.categories)
  const tags = useSelector((state) => state.blog.tags)
  const estado = useSelector((state) => state.blog.status)
  const [slugText, setSlugText] = useState('')

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getTags())
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
    // data.description = postContent
    // const file = data.archivo[0]
    // const imgUrl = file
    //   ? URL.createObjectURL(file)
    //   : 'https://blog.oxfamintermon.org/wp-content/uploads/2014/11/ONG-copia-e1415635063990.jpg'
    // setImageUrl(imgUrl)

    const post = {
      slug: data.title
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-'),
      title: data.title,
      description: data.description,
      image: data.image,
      categories: data.categories,
      status: 'active',
      tags: data.tags,
    }
    console.log(post.slug)
    dispatch(addBlog(post))
    estado === 'succeeded'
      ? setReqMessage('Creado Correctamente')
      : setReqMessage(estado)
    console.log(estado)
  }

  return (
    <>
      <h2>Crear Articulo de Blog</h2>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input {...register('title', { required: true })} />
          </label>
          <label>
            Descripción
            <textarea
              rows="10"
              {...register('description', { required: true, maxLength: 800 })}
            />
          </label>
          <div className="checkboxBlock">
            <span>Categorias:</span>
            {categories.map((category) => (
              <label key={category.name}>
                <input
                  type="checkbox"
                  value={category._id}
                  // checked={blogPost.categories?.some(
                  //   (c) => c._id === category._id
                  // )}
                  {...register('categories')}
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
          <div className="checkboxBlock">
            <span>Etiquetas:</span>
            {tags.map((tag) => (
              <label key={tag._id}>
                <input
                  type="checkbox"
                  // checked={blogPost.tags?.some((t) => t === tag._id)}
                  value={tag._id}
                  placeholder={tag.name}
                  {...register('tags', {})}
                />
                <span>{tag.name}</span>
              </label>
            ))}
          </div>
          <label>
            Cargar nueva imagen:
            <input placeholder="Imagen Url" {...register('image')} />
            <input type="submit" />
          </label>
        </form>
      </FormBody>
    </>
  )
}

// <form onSubmit={handleSubmit(handleData)}>
//         {/**Input Nombre */}
//         <TextInput
//           label="Nombre"
//           type="text"
//           name="name"
//           register={register}
//           errors={errors}
//           required={true}
//           pattern="^[A-Za-zÁ-ÿ\s]+$"
//         />
//         {/**Input Description */}
//         <label>
//           Descripción:
//           <ReactQuill
//             name="description"
//             value={postContent}
//             onChange={(value) => setPostContent(value)}
//           />
//         </label>
//         {/**Categoria map checkbox */}
//         {categories.map((category, index) => (
//           <label key={category._id}>
//             <TextInput
//               type="checkbox"
//               register={register}
//               value={category.name}
//               name={'category'}
//               errors={errors}
//               required={false}
//             />
//             {category.name}
//           </label>
//         ))}
//         {/**Categoria error  */}
//         {errors.categoria?.type === `required` && (
//           <p>Seleccione alguna categoria por favor</p>
//         )}
//         {/**Imagen  updale */}
//         <FileInput register={register} name="image" />
//         <button type="submit">Publicar</button>
//         <span>{reqMessage}</span>
//       </form>
