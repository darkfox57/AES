import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { InvolucrateBody } from './involucrate.styles'

export default function InvolucrateDashMain() {
  return (
    <>
      <h2>Involucrate</h2>
      <InvolucrateBody>
        <div>Especialistas</div>
        <div>Instituciones</div>
        <div>Organizaciones</div>
      </InvolucrateBody>
    </>
  )
}
