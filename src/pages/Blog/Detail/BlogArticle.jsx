import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Blog from '../../../components/Blog/Blog'
import Footer from '../../../components/Footer/Footer'
import Portada from '../../../components/Portada/Portada'
import { getBlog } from '../../../redux/actions/blog_actions'
import { BlogDetailBody } from './blogdetail.styles'

export default function BlogArticle() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const postBlog = useSelector((state) => state.blog.blog)
  const post = postBlog[0]

  useEffect(() => {
    dispatch(getBlog(slug))
  }, [slug, dispatch])

  return (
    <>
      <Portada img={post?.image} titulo={post?.title} />
      <BlogDetailBody>
        <span>
          {new Date(post?.createdAt).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}
        </span>
        <h2>{post?.title}</h2>
        <p>{post?.description}</p>
      </BlogDetailBody>
      <Blog />
      <Footer />
    </>
  )
}
