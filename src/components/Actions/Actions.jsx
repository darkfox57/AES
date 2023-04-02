import React from 'react'
import { FaAngellist, FaReact } from 'react-icons/fa'

import Button from '../../utils/Button/Button'

import {
  ActionContainer,
  Donation_Action_Content,
  Involve_Action_Content,
} from './Actions.Styles'

export default function Actions() {
  return (
    <ActionContainer>
      <Donation_Action_Content>
        <FaAngellist size={75} />
        <div>
          <h3>HAZ UNA DONACION</h3>
          <p>
            Apoya nuestras causas con una donación que nos va a ayudar a cumplir
            con todos los objetivos
          </p>
          <Button type="link" link="/" text="Leer más" size="md" />
        </div>
      </Donation_Action_Content>
      <Involve_Action_Content>
        <FaReact size={75} />
        <div>
          <h3>INVOLUCRATE</h3>
          <p>
            Hay muchas formas en las que puedes contribuir a nuestras labores
          </p>
          <Button type="link" link="/" text="Leer más" size="md" />
        </div>
      </Involve_Action_Content>
    </ActionContainer>
  )
}
