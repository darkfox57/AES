import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/actions/actions'
import { BlogContainer, BlogList } from './Blog.Styled'
import BlogCard from './BlogCard'

import usePagination from '../../Hooks/usePagination'
import BlogHeader from './BlogHeader'

// DE PRUEBA ARRAY DE OBJETO
const event = [
  {
    fecha: '02/45/24',
    text: '10 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '7 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '8 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '10 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/1999',
    text: '7 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '8 señales de que tu grupo de apoyo no esta funcionando',
  },
]
const Blog = () => {
  // usamos un useHook perzonalizado para la paginacion tipo slider

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blogs)

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [dispatch])

  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(posts, 3)
  return (
    <BlogContainer>
      <BlogHeader
        currentPage={currentPage}
        totalPages={totalPages}
        NextPage={NextPage}
        PreviousPage={PreviousPage}
      />
      <BlogList>
        {paginatedData.map((post) => (
          <BlogCard
            key={post._id}
            image={post.image}
            title={post.title}
            status={post.status}
            date={post.createdAt}
          />
        ))}
      </BlogList>
    </BlogContainer>
  )
}

export default Blog
