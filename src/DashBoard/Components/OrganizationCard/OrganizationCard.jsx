import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../utils/Button/Button'

export default function OrganizationCard({
  id,
  name,
  email,
  organization,
  phone,
  submit,
  view,
  city,
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
          <p>{organization}</p>
        </td>
        <td>
          <p>{city}</p>
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
          <Button type="primary" size="sm" text="ver" />
        </td>
      </tr>
    </>
  )
}
