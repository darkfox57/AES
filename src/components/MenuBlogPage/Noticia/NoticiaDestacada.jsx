import React from 'react'
import { ImNewspaper } from 'react-icons/im'
import { useSelector } from 'react-redux'
import CardNoticias from './CardNoticias'
import { NoticiaContainer } from './NoticiaDestacada.Styled'
const NoticiaDestacada = ({ Noticia, EventPage, title }) => {
  const NewNoticia = Noticia.slice(0, 5)
  return (
    <NoticiaContainer>
      <h4>
        <ImNewspaper className="icon-news" /> {title}
      </h4>
      <div className="flex-card">
        {NewNoticia.map((noticia, i) => (
          <CardNoticias
            EventPage={EventPage}
            key={i}
            slug={noticia.slug}
            title={noticia.title}
            fecha={noticia.createdAt}
            dateOut={noticia.date_in}
            dateIn={noticia.date_out}
            img={!noticia.image ? noticia.frontpage : noticia.image}
          />
        ))}
      </div>
    </NoticiaContainer>
  )
}

export default NoticiaDestacada
