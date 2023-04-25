import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { BlogContainer, LastBlogsContainer } from './NewestBlogs.Styles'

export default function NewestBlogs() {
  const navigate = useNavigate()
  const blogs = useSelector((state) => state.blog.swiperBlog)

  return (
    <LastBlogsContainer>
      {blogs
        .filter((post) => post.status)
        .slice(0, 3)
        .map((blog, index) => (
          <BlogContainer
            key={index}
            onClick={() => {
              navigate(`/blog/${blog.slug}`)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div>
              <img src={blog.image} alt="imagen" />
            </div>
            <div>
              <span className="title">{blog.title}</span>
              <br />
              <span className="date">
                {new Date(blog.createdAt).toLocaleString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </BlogContainer>
        ))}
    </LastBlogsContainer>
  )
}
