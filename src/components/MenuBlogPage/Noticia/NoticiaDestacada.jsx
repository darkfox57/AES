import React from 'react'
import CardNoticias from './CardNoticias'
import { NoticiaContainer } from './NoticiaDestacada.Styled'
import { useSelector } from 'react-redux'
import { ImNewspaper} from 'react-icons/im'
const NoticiaDestacada = () => {
  const blogsNoticia = useSelector(state => state.blog.copyblogs).map((blog) => blog)
  .reverse()
  .slice(0, 5)
  return (
    <NoticiaContainer>
       <h4><ImNewspaper className='icon-news'/> Noticias Destacadas</h4>
       <div className='flex-card'>
       {blogsNoticia.map((noticia,i) => <CardNoticias key={i} title={noticia.title} fecha={noticia.createdAt} img={noticia.image} />)}
       </div>
    </NoticiaContainer>
  )
}

export default NoticiaDestacada
