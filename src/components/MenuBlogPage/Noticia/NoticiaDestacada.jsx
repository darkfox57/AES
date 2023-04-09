import React from 'react'
import CardNoticias from './CardNoticias'
import { NoticiaContainer } from './NoticiaDestacada.Styled'
import { useSelector } from 'react-redux'

const NoticiaDestacada = () => {
  const blogsNoticia = useSelector(state => state.blog.copyblogs).map((blog) => blog)
  .reverse()
  .slice(0, 5)
  return (
    <NoticiaContainer>
       <h4>🗞️ Noticias Destacadas</h4>
       <div className='flex-card'>
       {blogsNoticia.map(noticia => <CardNoticias title={noticia.title} fecha={noticia.createdAt} img={noticia.image} />)}
       
       </div>
    </NoticiaContainer>
  )
}

export default NoticiaDestacada
