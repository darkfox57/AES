import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import usePagination from '../../../Hooks/usePagination'
import Button from '../../../utils/Button/Button'
import Paginado from '../../Components/Paginado/Paginado'
import BlogCard from './BlogCard/BlogCard'
import { BlogList, Table } from './blog.styles'

export default function BlogDash() {
  const posts = useSelector((state) => state.blog.blogs)

  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(posts, 8)
  return (
    <>
      <h2>Blog</h2>
      <Link to={`/dashboard/blog/add-blog`}>
        <button className="dashBtn">Crear nuevo articulo</button>
      </Link>

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
            {paginatedData.map((post) => (
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
        <Paginado
          currentPage={currentPage}
          totalPages={totalPages}
          PreviousPage={PreviousPage}
          NextPage={NextPage}
        />
      </BlogList>
    </>
  )
}
