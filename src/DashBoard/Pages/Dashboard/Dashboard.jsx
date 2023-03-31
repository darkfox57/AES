import React from 'react'
import DashLayout from '../../../layouts/DashLayout'
import { DashBoardBody } from './dashboard.styles'

export default function Dashboard() {
  return (
    <DashLayout>
      <h3>DashBoard</h3>
      <DashBoardBody>
        <div>Involucrate</div>
        <div>Mensajes</div>
        <div>Suscripciones</div>
        <div>Blogs</div>
        <div>Eventos</div>
        <div>Banner Principal</div>
      </DashBoardBody>
    </DashLayout>
  )
}
