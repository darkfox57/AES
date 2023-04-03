import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getBlog } from '../../../redux/actions/blog_actions'

export default function BlogArticle() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const post = useSelector((state) => state.blog.blog)

  useEffect(() => {
    dispatch(getBlog(slug))
  }, [slug, dispatch])

  return (
    console.log(post),
    (
      <div>
        <h2>hh</h2>
      </div>
    )
  )
}
