import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/actions/blog_actions'
import { BlogContainer, BlogList } from './Blog.Styled'
import BlogCard from './BlogCard'

import usePagination from '../../Hooks/usePagination'
import BlogHeader from './BlogHeader'

const Blog = () => {
  // usamos un useHook perzonalizado para la paginacion tipo slider

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.blogs)

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

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
