import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getAllUsers,
  updateUser,
} from '../../../../../redux/actions/account_actions'
import { ToggleButton } from '../../../Blog/BlogCard/blogcard.styles'

export default function UserCard({
  id,
  firstname,
  lastname,
  roles,
  status,
  email,
  avatar,
}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(status)

  const edited = useSelector((state) => state.blog.confirmation)

  const handleClick = async () => {
    const userdata = {
      id,
      firstname,
      lastname,
      roles,
      status,
      email,
      avatar,
      status: !active,
    }
    await dispatch(updateUser(userdata)).finally(() => dispatch(getAllUsers()))
    setActive(active ? false : true)
  }

  // useEffect(() => {
  //   setActive(active ? false : true)
  // }, [edited.message])

  return (
    <>
      <tr>
        <td>
          <img src={avatar} alt={firstname} />
        </td>
        <td>
          <p>{firstname}</p>
        </td>
        <td>
          <p>{lastname}</p>
        </td>
        <td>
          <p>{email}</p>
        </td>
        <td>
          <Link to={`/dashboard/perfil/${id}`}>
            <button className="dashBtn">Editar</button>
          </Link>
        </td>
        <td>
          <div>
            <ToggleButton
              className={`${active ? ' active' : ''}`}
              type="button"
              onClick={handleClick}
              aria-pressed={status}
              autoComplete="off"
            >
              <div className="handle"></div>
            </ToggleButton>
          </div>
        </td>
      </tr>
    </>
  )
}
