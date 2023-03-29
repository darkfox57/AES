import React from 'react'
import { FaAngellist, FaReact } from 'react-icons/fa'

import {
  ActionContainer,
  Donation_Action_Stylizied,
  Involve_Action_Stylizied,
} from './Actions.Styles'

export default function Actions() {
  return (
    <ActionContainer>
      <Donation_Action_Stylizied>
        <div>
          <FaAngellist size={75} />
        </div>
        <div>
          <h2>HAZ UNA DONACION</h2>
          <p>
            Apoya nuestras causas con una donación que nos va a ayudar a cumplir
            con todos los objetivos
          </p>
        </div>
      </Donation_Action_Stylizied>

      <Involve_Action_Stylizied>
        <div>
          <FaReact size={75} />
        </div>
        <div>
          <h2>INVOLUCRATE</h2>
          <p>
            Hay muchas formas en las que puedes contribuir a nuestras labores
          </p>
        </div>
      </Involve_Action_Stylizied>
    </ActionContainer>
  )
}
