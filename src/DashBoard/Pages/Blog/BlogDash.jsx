import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../utils/Button/Button'
import BlogCard from './BlogCard/BlogCard'
import { BlogList, Table } from './blog.styles'

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
        <Table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Fecha Publicación</th>
              <th>Editar</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
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
                short_description={post.short_description}
              />
            ))}
          </tbody>
        </Table>
      </BlogList>
    </>
  )
}
