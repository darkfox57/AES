import React from 'react'
import {
    BlockDetail, ButonBlockContainer, ListBlock,
  } from './EventoForm.Styled'
import Button from '../../utils/Button/Button'
const BlockEvento = ({Evento}) => {
  return (
    <BlockDetail>
        <h4>{Evento?.title}</h4>
        <ListBlock>
            <ul>
                <li><span>🏠</span>{Evento?.location}</li>
                <li><span>📧</span>span_blockdetail@gmail.com</li>
                <li><span>📱</span>951378285</li>
                <li><span>🗓️</span>{Evento?.date}</li>
            </ul>
        </ListBlock>
        <ButonBlockContainer>
         <Button type={"secundary"} size={"lg"} text={"Book Your Seat"}/>
        </ButonBlockContainer>
    </BlockDetail>
  )
}

export default BlockEvento
