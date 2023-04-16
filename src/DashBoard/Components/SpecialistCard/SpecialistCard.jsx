import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function SpecialistCard({
  id,
  name,
  email,
  phone,
  submit,
  country,
  view,
}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(view)

  const edited = useSelector((state) => state.blog.confirmation)

  // const handleClick = async () => {
  //   const post = {
  //     _id: id,
  //     title,
  //     description,
  //     image,
  //     status: !active,
  //     categories: categories.map((c) => c._id),
  //     tags: tags.map((t) => t._id),
  //     files,
  //     short_description,
  //   }
  //   await dispatch(editBlog(post)).finally(() => dispatch(getAllBlogs()))
  //   setActive(active ? false : true)
  // }

  return (
    <>
      <tr>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{email}</p>
        </td>
        <td>
          <p>{phone}</p>
        </td>
        <td>
          <p>{country}</p>
        </td>
        <td>
          {' '}
          {new Date(submit).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </td>
        <td>
          <Link to={`/dashboard/involucrate/instituciones/${id}`}>Ver</Link>
        </td>
      </tr>
    </>
  )
}
