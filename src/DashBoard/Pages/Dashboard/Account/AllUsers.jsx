import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../../../redux/actions/account_actions'
import { Table } from '../../Blog/blog.styles'
import UserCard from './UserCard/UserCard'

export default function AllUsers() {
  const users = useSelector((state) => state.account.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
      <h2>All Users</h2>
      <Table>
        <thead>
          <tr>
            {/**ingrese el name para poder capturarlo y ordenarlo att emma */}
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {users.map(
            (user) =>
              user.roles.name !== 'superadmin' && (
                <UserCard
                  key={user._id}
                  id={user._id}
                  avatar={user.avatar}
                  email={user.email}
                  status={user.status}
                  roles={user.roles.name}
                  firstname={user.firstname}
                  lastname={user.lastname}
                />
              )
          )}
        </tbody>
      </Table>
    </div>
  )
}
