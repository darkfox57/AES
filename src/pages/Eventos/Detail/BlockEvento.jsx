import React from 'react'
import {
  BlockDetail,
  ButonBlockContainer,
  ListBlock,
} from './EventArticle.Styles'
import {MdPlace,MdDateRange,MdOutgoingMail,MdSmartphone} from 'react-icons/md';

const BlockEvento = ({ event }) => {
  return (
    <BlockDetail>
      <h4>Detalles del evento</h4>
      <ListBlock>
        <ul>
          <li>
            <span><MdPlace/></span>
            {event.location}
          </li>
          <li>
            <span><MdOutgoingMail/></span>span_blockdetail@gmail.com
          </li>
          <li>
            <span><MdSmartphone/></span>951378285
          </li>
          <li>
            <span><MdDateRange/></span>
            {new Date(event.date_in).toLocaleString('es-ES', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })}
            &nbsp; -&nbsp;
            {new Date(event.date_out).toLocaleString('es-ES', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })}
          </li>
        </ul>
      </ListBlock>
    </BlockDetail>
  )
}

export default BlockEvento
