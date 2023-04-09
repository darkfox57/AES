import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {
  addBlog,
  getBlog,
  getCategories,
} from '../../../../redux/actions/blog_actions'
import { FormBody } from './editBlog.styles'

export default function EditBlog() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const post = useSelector((state) => state.blog.blog)
  const categories = useSelector((state) => state.blog.categories)
  const estado = useSelector((state) => state.blog.status)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(getBlog(slug))
  }, [slug, dispatch])

  const handleData = (data) => {
    console.log(estado)
  }
  return (
    console.log(post),
    (
      <>
        <h2>Editar</h2>
        <FormBody>
          <form onSubmit={handleSubmit(handleData)}>
            <label>
              Titulo:
              <input
                defaultValue={post.title}
                {...register('title', { required: true })}
              />
            </label>
            <span>slug: {post.slug}</span>
            <label>
              Descripción
              <textarea
                defaultValue={post.description}
                {...register('Descripción', { required: true, maxLength: 800 })}
              />
            </label>
            <div className="checkboxBlock">
              <span>Categorias:</span>
              {categories.map((category) => (
                <label key={category._id}>
                  <input
                    type="checkbox"
                    placeholder={category.name}
                    {...register('Categorías', {})}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>

            <input
              type="checkbox"
              placeholder="Tags"
              {...register('Tags', {})}
            />
            <input
              type="url"
              placeholder="Imagen"
              {...register('Imagen', {})}
            />

            <input {...register('Estatus')} type="radio" value="activo" />
            <input {...register('Estatus')} type="radio" value=" inactivo" />

            <input type="submit" />
          </form>
        </FormBody>
      </>
    )
  )
}
