import React from 'react'
import { Link } from 'react-router-dom'
import institutionImg from '../../../../assets/institution.png'
import organizationImg from '../../../../assets/organization.png'
import specialistImg from '../../../../assets/specialist.png'

import { InvolucrateBody } from './involucrate.styles'

export default function InvolucrateDashMain() {
  return (
    <>
      <h2>Involucrate</h2>
      <InvolucrateBody>
        <div>
          <img src={specialistImg} alt="" />
          <h2>Especialistas</h2>
          <Link to="/dashboard/involucrate/especialistas">
            <button>Ver Inscritos</button>
          </Link>
        </div>
        <div>
          <img src={institutionImg} alt="" />
          <h2>Instituciones Educativas</h2>
          <Link to="/dashboard/involucrate/instituciones">
            <button>Ver Inscritos</button>
          </Link>
        </div>
        <div>
          <img src={organizationImg} alt="" />
          <h2>Organizaciones</h2>
          <Link to="/dashboard/involucrate/alianzas">
            <button>Ver Inscritos</button>
          </Link>
        </div>
      </InvolucrateBody>
    </>
  )
}
