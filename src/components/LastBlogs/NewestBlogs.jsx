import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { BlogContainer, LastBlogsContainer } from './NewestBlogs.Styles'

import { getAllBlogs } from '../../redux/actions/blog_actions'

export default function NewestBlogs() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const blogs = useSelector((state) => state.blog.copyblogs).map((blog) => blog)
    .reverse()
    .slice(0, 3)

  return (
    <LastBlogsContainer>
      {blogs
        .filter((post) => post.status)
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
              <span>
                {new Date(blog.createdAt).toLocaleString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <br />
              <span>{blog.title}</span>
            </div>
          </BlogContainer>
        ))}
    </LastBlogsContainer>
  )
}
