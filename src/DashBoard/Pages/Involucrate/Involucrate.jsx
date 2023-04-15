import React from 'react'
import { Outlet } from 'react-router'

export default function InvolucrateDash() {
  return (
    <>
      <h2>Involucrate</h2>
      {Outlet}
    </>
  )
}
