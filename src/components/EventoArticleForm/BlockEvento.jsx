import React from 'react'
import {
  BlockDetail,
  ButonBlockContainer,
  ListBlock,
} from './EventoForm.Styled'
import Button from '../../utils/Button/Button'
const BlockEvento = ({ event }) => {
  return (
    <BlockDetail>
      <h4>Detalles del evento</h4>
      <ListBlock>
        <ul>
          <li>
            <span>🏠</span>
            {event.location}
          </li>
          <li>
            <span>📧</span>span_blockdetail@gmail.com
          </li>
          <li>
            <span>📱</span>951378285
          </li>
          <li>
            <span>🗓️</span>
            {new Date(event.createdAt).toLocaleString('es-ES', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })}
          </li>
        </ul>
      </ListBlock>
      <ButonBlockContainer>
        <Button type={'secundary'} size={'lg'} text={'Anótate y participa!'} />
      </ButonBlockContainer>
    </BlockDetail>
  )
}

export default BlockEvento
