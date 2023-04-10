import React from 'react'
import { useSelector } from 'react-redux'
import DashLayout from '../../../layouts/DashLayout'
import { DashBoardBody } from './dashboard.styles'

export default function Dashboard() {
  const blogs = useSelector((state) => state.blog.blogs)
  const events = useSelector((state) => state.event.events)

  return (
    <>
      <h3>DashBoard</h3>
      <DashBoardBody>
        <div>Blogs</div>
        <div>Eventos</div>
        <div>Involucrate</div>
        <div>Mensajes</div>
        <div>Suscripciones</div>
        <div>Banner Principal</div>
      </DashBoardBody>
    </>
  )
}
