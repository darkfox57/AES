import React from 'react'
import CardNoticias from './CardNoticias'
import { NoticiaContainer } from './NoticiaDestacada.Styled'

const NoticiaDestacada = () => {
  return (
    <NoticiaContainer>
       <h4>🗞️ Noticias Destacadas</h4>
       <div className='flex-card'>
       <CardNoticias/>
       <CardNoticias/>
       <CardNoticias/>
       <CardNoticias/>
       <CardNoticias/>
       </div>
    </NoticiaContainer>
  )
}

export default NoticiaDestacada
