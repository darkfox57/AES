import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPersons } from '../../../../../redux/actions/dash_forms_actions'
import { Table } from '../../Participants/participants.styles'

export default function EventParticipants({ id }) {
  const participants = useSelector((state) => state.dash.persons)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPersons())
  }, [])

  const users = participants.filter(
    (user) => user.events.filter((e) => e === id).length > 0
  )

  return (
    console.log(users),
    (
      <div>
        <h2>Participantes</h2>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>
                  <p>{user.fullname}</p>
                </td>
                <td>
                  <p>{user.email}</p>
                </td>
                <td>
                  <p>
                    {new Date(user.createdAt).toLocaleString('es-ES', {
                      day: 'numeric',
                      month: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  )
}
