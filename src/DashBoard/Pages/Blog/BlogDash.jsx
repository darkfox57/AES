import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../utils/Button/Button'
import BlogCard from '../../Components/BlogCard/BlogCard'
import { BlogList } from './blog.styles'

export default function BlogDash() {
  const posts = useSelector((state) => state.blog.blogs)

  return (
    <>
      <h2>Blog</h2>
      <Button
        type="primary"
        link="/dashboard/blog/add-blog"
        text="Crear nuevo articulo"
        size="md"
      />
      <BlogList>
        <div className="blogHeader">
          <span>Imagen</span>
          <span>Titulo</span>
          <span>Fecha Publicación</span>
          <span>Editar</span>
          <span>Activar/Desactivar</span>
        </div>
        {posts.map((post) => (
          <BlogCard
            key={post._id}
            id={post._id}
            image={post.image}
            title={post.title}
            status={post.status}
            date={post.createdAt}
            slug={post.slug}
            categories={post.categories}
            description={post.description}
            tags={post.tags}
            files={post.files}
          />
        ))}
      </BlogList>
    </>
  )
}
