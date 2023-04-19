import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import usePagination from '../../../Hooks/usePagination'
import Button from '../../../utils/Button/Button'
import Paginado from '../../Components/Paginado/Paginado'
import BlogCard from './BlogCard/BlogCard'
import { BlogList, Table } from './blog.styles'
import { OrderDasboard } from '../../../redux/actions/blog_actions'
import { useState } from 'react'

export default function BlogDash() {
  const posts = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()
  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(posts, 8)
  
  //**capturamos el valor y le enviamos al reducer att:emma */
  const [sort,setSort] = useState("asc")
  const handleSort = (e) => {
    const Name = e.target.getAttribute('name')
    const obj = {
      type: Name,
      sort: sort
    }
    dispatch(OrderDasboard(obj))
    setSort(sort === "asc" ? "desc" : "asc")
  }

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
              {/**ingrese el name para poder capturarlo y ordenarlo att emma */}
              <th>
                Imagen
              </th>
              <th className='order' name="titulo" onClick={handleSort}>
                Título
              </th>
              <th  className='order' name="fecha" onClick={handleSort}>
                Fecha Publicación
              </th>
              <th>Editar</th>
              <th  className='order' name="estado" onClick={handleSort}>
                Estado
              </th>
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
