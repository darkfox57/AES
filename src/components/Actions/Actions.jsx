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
            Ayúdanos a seguir llevando nuestros talleres a niños y adolescentes.
          </p>
          <Button
            type="link"
            link="/faqs/donaciones"
            text="Leer más"
            size="md"
          />
        </div>
      </Donation_Action_Content>
      <Involve_Action_Content>
        <FaReact size={75} />
        <div>
          <h3>INVOLUCRATE</h3>
          <p>Descubre todas las formas en que las puedes ayudarnos.</p>
          <Button type="link" link="/involucrate" text="Leer más" size="md" />
        </div>
      </Involve_Action_Content>
    </ActionContainer>
  )
}
