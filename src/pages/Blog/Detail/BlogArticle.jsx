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
  const post = useSelector((state) => state.blog.blog)
  useEffect(() => {
    dispatch(getBlog(slug))
  }, [slug, dispatch])

  const fecha = new Date(post?.createdAt)
  return (
    <>
      <Portada img={post?.image} titulo={post?.title} />
      {post && post.title && (
        <BlogDetailBody>
          <div className="flexx">
            <span>{fecha.toLocaleDateString()}</span>
            <h2>{post?.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post?.description,
              }}
            ></div>
            <div className="imgContainer">
              <img src={post?.image} alt={post?.title} />
              <div className="categoryflex">
                {post &&
                  post.categories &&
                  post.categories.map((cate) => (
                    <span key={cate.name}>{cate.name}</span>
                  ))}
              </div>
            </div>
          </div>
        </BlogDetailBody>
      )}
      <Blog />
      <Footer />
    </>
  )
}
